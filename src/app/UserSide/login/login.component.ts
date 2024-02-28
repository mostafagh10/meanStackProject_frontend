import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  isLoggedIn: boolean = false;

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    console.log(token);
    this.isLoggedIn = !!token;
  }

  handleLogin(form: any) {
    const formData = form.value;
    this.http
      .post<any>('http://127.0.0.1:3000/user/login', formData)
      .subscribe({
        next: (response) => {
          console.log('Form data saved:', response.token);
          
          localStorage.setItem('token', response.token);
          this.checkLoggedIn();
          
          console.log('logged In  ----> ' + this.isLoggedIn);
          
          const jwtToken = response.token;
          const tokenParts = jwtToken.split('.');
          const payload = JSON.parse(atob(tokenParts[1]));
          const id = payload._id;
          
          console.log('User ID:', id);
          
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
        },
        error: (error) => {
          console.error('Error saving form data:', error);
        },
      });
  }
}
