import { Component } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { Subject } from 'rxjs';
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule, EditCategoryComponent, AddCategoryComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories !: Array<any>;

  currentCategory : Subject<any> = new Subject<any>();

  
  
  constructor (private categoryService:CategoryService){ }
  ngOnInit() {
    this.categoryService.getCategories().subscribe((data:any) => this.categories = data);
  }

  deleteCategory(categoryID: any) {
    this.categoryService.deleteCategory(categoryID)
  }

  sendCategory(category : any) {
    this.currentCategory.next(category)
  }

}
