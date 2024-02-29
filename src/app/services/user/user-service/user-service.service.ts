import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  errormessage: Subject<string> = new Subject<string>();
  successmessage: Subject<string> = new Subject<string>();
  constructor(private http:HttpClient) { }

  addBookToUser(bookId : any,userId : any){
    this.http.post(`http://localhost:3000/user/books/${bookId}`,{"_id":userId})
    .pipe(
      catchError(this.handleError.bind(this))
    )
    .subscribe((data) => {
      this.successmessage.next('the book added in your list');
      setTimeout(() => {  
            this.successmessage.next('');    
      }, 3000);
  })
  }

  updateBookShelve(bookId:any,updateForm:any){
    this.http.patch(`http://localhost:3000/user/updateShelve/${bookId}`,updateForm).subscribe((data) => {
          window.location.reload();
      })
  }

  updateBookRate(bookId:string,updateForm:any){
    this.http.patch(`http://localhost:3000/user/updateRate/${bookId}`,updateForm).subscribe((data) => {
          console.log(data);
          window.location.reload();
      })
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `${error.error.errorMessage}`;
    }
    this.errormessage.next(errorMessage);
    setTimeout(() => {  
          this.errormessage.next('');  
    }, 3000);
    console.error("the error : ",errorMessage);
    return throwError(errorMessage);
  }
  
}
