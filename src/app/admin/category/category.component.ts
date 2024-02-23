import { Component } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories !: Array<any>;

  editedCategoryObject !: any;

  categoryForm : FormGroup;
  
  constructor (private categoryService:CategoryService){ 
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('')
    })
  }
  ngOnInit() {
    this.categoryService.getCategories().subscribe((data:any) => this.categories = data);
  }

  deleteCategory(categoryID: any) {
    this.categoryService.deleteCategory(categoryID)
  }

  handleForm() {
    this.categoryService.postCategory(this.categoryForm.value)
  }

  getEditedCategoryData(category : any) {
    this.editedCategoryObject = category;
  }

  editCategory() {
    console.log(this.categoryForm.value)
    //this.categoryService.editCategory(this.editCategoryForm)
  }

}