import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks() {
    return this.http.get('https://mean-project.onrender.com/book');
  }

  postBook(newBook: any) {
    this.http.post('https://mean-project.onrender.com/book', newBook)
      .subscribe((data: any) => {
        window.location.reload();
      });
  }

  deleteBook(bookId: any) {
    this.http.delete(`https://mean-project.onrender.com/book/${bookId}`)
      .subscribe();
    window.location.reload();
  }

  editBook(bookId: any,book:any) {
    this.http.put(`https://mean-project.onrender.com/book/${bookId}`, book)
      .subscribe();
    window.location.reload();
  }
}
