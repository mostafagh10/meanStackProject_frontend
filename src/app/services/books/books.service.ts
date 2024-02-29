import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class BooksService {

 constructor(private http: HttpClient) { }

 getData(){
      return this.http.get('http://127.0.0.1:3000/book')
  }

 getOneBook(bookId: string){
    const url = `http://127.0.0.1:3000/book/${bookId}`;
    return this.http.get(url);
  }

  getMyBooks(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')! });
    let options = { headers: headers };
    const url = "http://127.0.0.1:3000/user/books/";
    return this.http.post(url, null, options);
  }

  addBook(bookId: string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')! });
    let options = { headers: headers };
    const url = `http://127.0.0.1:3000/user/books/${bookId}`;
    return this.http.post(url, null, options);
  }

  updateBookRate(rate: number, bookId: string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')! });
    let options = { headers: headers };

    const url = `http://127.0.0.1:3000/user/updateRate/${bookId}`;
    return this.http.patch(url, {"rate": rate}, options);
  }

  updateBookShelve(shelve: string, bookId: string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')! });
    let options = { headers: headers };

    const url = `http://127.0.0.1:3000/user/updateShelve/${bookId}`;
    return this.http.patch(url, {"shelve": shelve}, options);
  }
}
