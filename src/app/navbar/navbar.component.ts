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
  
  constructor(private router: Router,private cdRef: ChangeDetectorRef){}

  ngOnInit() {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = Boolean(token);
  }

  logOut() {
    this.token = localStorage.removeItem('token');
    this.checkLoggedIn();
  }
}
