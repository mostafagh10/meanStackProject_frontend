import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getData(){
       return this.http.get('http://127.0.0.1:3000/category')
   }

   getCategoryDetails(id:any) {
    return this.http.get(`http://127.0.0.1:3000/category/${id}`);
  }


}
