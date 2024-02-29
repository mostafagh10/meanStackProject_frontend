import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  
  constructor(private http: HttpClient, private route:ActivatedRoute) { }

  getData(){
    let name = this.route.snapshot.queryParams['name']
    if (name) {
      return this.http.get
    (`http://127.0.0.1:3000/author?name=${name}`)
    }
    return this.http.get
    (`http://127.0.0.1:3000/author`)
   }
}
