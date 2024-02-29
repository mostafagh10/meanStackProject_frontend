import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { LoginService } from '../../services/admin/login/login.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css',
})
export class AdminRegisterComponent {
  errormessage!: String;
  successmessage!: String;
  registerForm: FormGroup;

  ngOnInit(){
    console.log(localStorage.getItem("token"));
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private loginservice:LoginService
    ) {
    this.registerForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
      confirmpassword: new FormControl ('', [Validators.required])
    });
  }

  handlesubmit(){
    console.log(this.registerForm.value);
    const formData = this.registerForm.value;
    this.http.post<any>('http://localhost:3000/admin/', formData)
    .pipe(
      catchError(this.handleError.bind(this))
    )
    .subscribe({
      next: response => {
        this.errormessage = '';
        this.successmessage = 'new admin saved successfully ..'
        this.registerForm.reset();
      },
      error: error => {
        console.error('Error saving form data:', error);
      }
    });
  }

  validatePasswordConfirmation(): void {
    const passwordValue = this.registerForm.get('password')?.value;
    const confirmPasswordValue = this.registerForm.get('confirmpassword')?.value;

    if (passwordValue !== confirmPasswordValue) {
      this.registerForm.get('confirmpassword')?.setErrors({ 'mismatch': true });
    } else {
      this.registerForm.get('confirmpassword')?.setErrors(null);
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `${error.error.errorMessage}`;
    }
    this.errormessage = errorMessage;
    this.successmessage = '';
    return throwError(errorMessage);
  }

  checkLogin() {
    if(!this.loginservice.checkLoggedIn()) {
      this.router.navigate(['/admin/login']).then();
    }
  }
  





}
