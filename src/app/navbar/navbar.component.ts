import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  token: any = localStorage.getItem('token');
  role !: String;
  constructor(private router: Router,private cdRef: ChangeDetectorRef){}

  ngOnInit() {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = Boolean(token);
    if (token) {
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      this.role = payload.role;
      console.log('Current role:', this.role);
    }
  }

  logOut() {
    this.token = localStorage.removeItem('token');
    this.checkLoggedIn();
  }
}
