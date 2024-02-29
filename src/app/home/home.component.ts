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
  
  isLoggedIn: boolean = false;
  token: any = localStorage.getItem('token'); 
  shelveValues = ["read", "reading", "want to read"];
  ratingValues = [1, 2, 3, 4, 5];
  myBooks: any;
  targetBookId: any;
  value: any;

  constructor(private booksService: BooksService, private routeObj : Router) { }

  updateBookRate(event: any, bookId: string){
    console.log(event.target.value, bookId);
    this.booksService.updateBookRate(event.target.value, bookId).subscribe(
      res => {
        console.log(res);
        },
        err => {  
          alert(`Something went wrong!  ${err}`)
      })
  }

  updateBookShelve(event: any, bookId: string){
    console.log(event.target.value, bookId);
    this.booksService.updateBookShelve(event.target.value, bookId).subscribe(
      res => {
        console.log(res);
        },
        err => {  
          console.log(err);
          
          alert(`Something went wrong!  ${err}`)
      })
  }


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
      })
  }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
  }


}
