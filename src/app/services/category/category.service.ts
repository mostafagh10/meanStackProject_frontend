import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories !: Array<any>;

  constructor(private http: HttpClient) { 
    this.http.get('localhost:3000/category').subscribe((data : any) => {
      this.categories = data;
    })
  }

  getCategories() {
    return this.categories
  }
}
