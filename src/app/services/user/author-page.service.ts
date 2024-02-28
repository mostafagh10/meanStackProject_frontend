import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorPageService {

  constructor(private http:HttpClient) { }

  getAuthor(id: string) {
    return this.http.get(`http://localhost:3000/author/${id}`)
  }

  getAuthorBooks(id: string) {
    return this.http.get(`http://localhost:3000/author/${id}/authorbooks`)
  }
}
