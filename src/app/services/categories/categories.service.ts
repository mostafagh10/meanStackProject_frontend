import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getData(){
    let name = this.route.snapshot.queryParams['name']
    if (name) {
      return this.http.get(`http://127.0.0.1:3000/category?name=${name}`)  
    }
    return this.http.get('http://127.0.0.1:3000/category')
   }

   getCategoryDetails(id:any) {
    return this.http.get(`http://127.0.0.1:3000/category/${id}`);
  }


}
