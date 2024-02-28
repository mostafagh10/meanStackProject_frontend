import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  ngOnInit(){
    console.log(localStorage.getItem("token"));
  }
  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    this.registerForm = new FormGroup({
      Firstname: new FormControl('', [Validators.required]),
      Lastname: new FormControl('', [Validators.required]),
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
    this.http.post<any>('http://localhost:3000/admin/', formData).subscribe({
      next: response => {
        console.log('Form data saved:', response);
        this.router.navigate(['/admin']).then();
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
  





}
