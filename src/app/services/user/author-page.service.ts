import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorPageService {

  constructor(private http:HttpClient) { }

  getAuthor(id: string) {
    return this.http.get(`https://mean-project.onrender.com/author/${id}`)
  }

  getAuthorBooks(id: string) {
    return this.http.get(`https://mean-project.onrender.com/author/${id}/authorbooks`)
  }
}
