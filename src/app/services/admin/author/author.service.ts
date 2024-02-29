import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  errormessage: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get('http://localhost:3000/author');
  }

  postAuthor(newauthor: any) {
    this.http.post('http://localhost:3000/author', newauthor)
      .pipe(
        catchError(this.handleError.bind(this))
      )
      .subscribe((data: any) => {
        this.errormessage.next('');
        window.location.reload();
      });
  }

  deleteAuthor(authorId: any) {
    this.http.delete(`http://localhost:3000/author/${authorId}`)
      .subscribe((data) => console.log(data));
    window.location.reload();
  }

  editAuthor(authorId: any,author:any) {
    this.http.patch(`http://localhost:3000/author/${authorId}`, author)
    .pipe(
      catchError(this.handleError.bind(this))
    )
    .subscribe((data: any) => {
      this.errormessage.next('');
      window.location.reload();
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `${error.error.errorMessage}`;
    }
    this.errormessage.next(errorMessage);
    return throwError(errorMessage);
  }
}

