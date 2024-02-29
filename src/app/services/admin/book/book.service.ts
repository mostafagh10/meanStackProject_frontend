import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks() {
    return this.http.get('http://localhost:3000/book');
  }

  postBook(newBook: any) {
    this.http.post('http://localhost:3000/book', newBook)
      .subscribe((data: any) => {
        window.location.reload();
      });
  }

  deleteBook(bookId: any) {
    this.http.delete(`http://localhost:3000/book/${bookId}`)
      .subscribe();
    window.location.reload();
  }

  editBook(bookId: any,book:any) {
    this.http.put(`http://localhost:3000/book/${bookId}`, book)
      .subscribe();
    window.location.reload();
  }
}
