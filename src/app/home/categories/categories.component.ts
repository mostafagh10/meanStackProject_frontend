import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private http:HttpClient){};
  categories:any=[];

  ngOnInit(){
    this.http.get('http://localhost:3000/category').subscribe((data) => {
      console.log(data)
      this.categories = data;
    });
  }

}
