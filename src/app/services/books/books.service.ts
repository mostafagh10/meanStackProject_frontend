import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

 constructor(private http: HttpClient, private route: ActivatedRoute) { }

 getData(){
    let name = this.route.snapshot.queryParams['name']
    if (name) {
      return this.http.get(`http://127.0.0.1:3000/book?name=${name}`)
    }
    return this.http.get('http://127.0.0.1:3000/book')
  }

  getOneBook(bookId: string){
    const url = `http://127.0.0.1:3000/book/${bookId}`;
    return this.http.get(url);
  }
  
}
