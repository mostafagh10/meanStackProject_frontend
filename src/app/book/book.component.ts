import { Component } from '@angular/core';
import { BooksService } from '../services/books/books.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

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
  constructor(private booksService: BooksService, private routeObj : Router,private http:HttpClient) { }

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
errormessage !:String;
successmessage !:String;

addToList(bookId : any){
  const token = localStorage.getItem('token');
  this.isLoggedIn = Boolean(token);
  if (token) {
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    this.userId = payload._id;
    console.log('payload : ',payload);
    console.log('Current userId:', this.userId);
  }
  if(this.isLoggedIn){
    this.http.post(`http://localhost:3000/user/books/${bookId}`,{"_id":this.userId})
    .pipe(
      catchError(this.handleError.bind(this))
    )
    .subscribe((data) => {
      console.log(data);
      this.successmessage = 'you added this book in your list'
      setTimeout(() => {  
        this.successmessage = ''    
      }, 3000);
    })
  }else{
    this.errormessage='please login to add book in your list'
    setTimeout(() => {  
      this.errormessage = ''    
    }, 3000);
  }
}


private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error occurred';
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Error: ${error.error.message}`;
  } else {
    errorMessage = `${error.error.errorMessage}`;
  }
  // Set error message
  this.errormessage = errorMessage;
  setTimeout(() => {  
    this.errormessage = ''    
  }, 3000);
  this.successmessage = '';
  console.error("the error : ",errorMessage);
  return throwError(errorMessage);
}
 
}
