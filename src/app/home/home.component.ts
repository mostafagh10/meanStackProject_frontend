import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BooksService } from '../services/books/books.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  ratingValues = [1, 2, 3, 4, 5];
  
  shelveValues = ["read", "reading", "want to read"];

  myBooks: any;
  value: any;
  // user/updateRate/65d73f4bd592d547c2a35f34

  constructor(private booksService: BooksService, private routeObj : Router) { }

  isLoggedIn: boolean = false;
  token: any = localStorage.getItem('token');
  
  ngOnInit() {
    this.checkLoggedIn();

    // Get  current logged in user books
    this.booksService.getMyBooks().subscribe(
      res => {
        this.myBooks = res
        },
        err => {  
          alert('You Got no books!')
          console.log(err.message);
      }
  )
  }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
  }


}
