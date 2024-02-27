import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // categories !: Array<any>;
  categories !: BehaviorSubject<Array<any>>;
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('http://localhost:3000/category');
  }

  addCategory(category: any) {
    this.http.post('http://localhost:3000/category', category)
    .subscribe((data) => console.log(data));
    window.location.reload();
  }

  deleteCategory(categoryID: any) {
    this.http.delete(`http://localhost:3000/category/${categoryID}`)
    .subscribe((data) => console.log(data));
    window.location.reload();
  }

  editCategory(category : any) {
    this.http.patch(`http://localhost:3000/category/${category._id}`, category)
    .subscribe((data) => console.log(data))
    window.location.reload()
  }
}