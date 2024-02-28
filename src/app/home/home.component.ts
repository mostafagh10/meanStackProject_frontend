import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent
  ],
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
