import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  errormessage!: String;
  successmessage!: String;

  registerForm: FormGroup;

  ngOnInit(){
    console.log(localStorage.getItem("token"));
  }
  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    this.registerForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+$/),
      ]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
      retypePassword: new FormControl ('', [Validators.required])
    });
  }

  handlesubmit(){
    const formData = this.registerForm.value;
    console.log(formData);
    this.http.post<any>('http://127.0.0.1:3000/user/register/', formData)
    .pipe(
      catchError(this.handleError.bind(this))
    )
    .subscribe({
      next: response => {
        this.errormessage = '';
        this.successmessage = 'your data saved successfully ..'
        console.log('Form data saved:', response);
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
    // Set error message
    this.errormessage = errorMessage;
    this.successmessage = '';
    console.error("the error : ",errorMessage);
    return throwError(errorMessage);
  }
  





}
