import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  errormessage: Subject<string> = new Subject<string>();

  // categories !: Array<any>;
  categories !: BehaviorSubject<Array<any>>;
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('https://mean-project.onrender.com/category');
  }

  addCategory(category: any) {
    this.http.post('https://mean-project.onrender.com/category', category)
    .pipe(
      catchError(this.handleError.bind(this))
    )
    .subscribe((data: any) => {
      this.errormessage.next('');
      window.location.reload();
    });
  }

  deleteCategory(categoryID: any) {
    this.http.delete(`https://mean-project.onrender.com/category/${categoryID}`)
    .subscribe((data) => console.log(data));
    window.location.reload();
  }

  editCategory(category : any) {
    this.http.patch(`https://mean-project.onrender.com/category/${category._id}`, category)
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