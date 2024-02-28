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
    this.http.post<any>('http://127.0.0.1:3000/user/register/', formData).subscribe({
      next: response => {
        console.log('Form data saved:', response);
        this.router.navigate(['/']).then();
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
