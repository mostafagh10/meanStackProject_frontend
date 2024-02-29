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
      return this.http.get(`https://mean-project.onrender.com/book?name=${name}`)
    }
    return this.http.get('https://mean-project.onrender.com/book')
  }

  getOneBook(bookId: string){
    const url = `https://mean-project.onrender.com/book/${bookId}`;
    return this.http.get(url);
  }
  
}
