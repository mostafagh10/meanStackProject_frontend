import { Component } from '@angular/core';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  
  constructor (private categoryService:CategoryService){ }
  ngOnInit() {
    console.log(this.categoryService.getCategories())
  }


}
