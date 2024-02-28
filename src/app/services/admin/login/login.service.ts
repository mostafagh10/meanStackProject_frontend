import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor() { }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
    return this.isLoggedIn
  }
}
