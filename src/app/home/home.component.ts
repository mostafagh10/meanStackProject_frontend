import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoggedIn: boolean = false;
  token: any = localStorage.getItem('token');
  
  ngOnInit() {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
  }
}
