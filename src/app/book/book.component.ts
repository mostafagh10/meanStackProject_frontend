import { Component } from '@angular/core';
import { BooksService } from '../services/books/books.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { UserServiceService } from '../services/user/user-service/user-service.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatPaginatorModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  data: any;
  pagedBook: any[] = [];
  constructor(private booksService: BooksService, private routeObj : Router
    ,private http:HttpClient , private userService : UserServiceService) { }

 ngOnInit(): void{
     this.booksService.getData().subscribe(books => {
       this.data = books
       this.pagedBook = this.data.slice(0, 4);
     });
 }

 onPageChange(event: any): void {
  const startIndex = event.pageIndex * event.pageSize;
  const endIndex = startIndex + event.pageSize;
  this.pagedBook = this.data.slice(startIndex, endIndex);
}

 view(id: number){
  this.routeObj.navigate(['books', id])
}

isLoggedIn: boolean = false;
userId !: String;
addBookErrorMessage !:String;
addBookSuccessMessage !:String;

addToList(bookId : any){
  const token = localStorage.getItem('token');
  this.isLoggedIn = Boolean(token);
  if (token) {
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    this.userId = payload._id;
  }
  
  if(this.isLoggedIn){
  this.userService.addBookToUser(bookId , this.userId);
  this.userService.errormessage.subscribe((errorMessage => {
    this.addBookErrorMessage = errorMessage;
  }))

  this.userService.successmessage.subscribe((successMessage => {
    this.addBookSuccessMessage = successMessage;
  }))
}else{
  this.addBookErrorMessage = 'please login to add book in your list';
  setTimeout(() => {
    this.addBookErrorMessage = '';
  }, 3000);
}

}
}
