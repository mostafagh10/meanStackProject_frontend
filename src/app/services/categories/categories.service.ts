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
      return this.http.get(`https://mean-project.onrender.com/category?name=${name}`)  
    }
    return this.http.get('https://mean-project.onrender.com/category')
   }

   getCategoryDetails(id:any) {
    return this.http.get(`https://mean-project.onrender.com/category/${id}`);
  }


}
