import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category/category.service';
import { Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {
  editedCategoryObject !: any;

  @Input() categoryObject !: Observable<any>;

  editCategoryForm : FormGroup;
  
  constructor (private categoryService:CategoryService){ 
    this.editCategoryForm = new FormGroup({
      categoryName: new FormControl('',[
        Validators.required
      ])
    })
  }
  ngOnInit() {
    this.categoryObject.subscribe((data) => {
      console.log(data);
      this.editedCategoryObject = data;
      this.editCategoryForm.patchValue({
        categoryName: this.editedCategoryObject.categoryName
      })
    })
  }
  handleForm() {
    const newCategory = {
      _id : this.editedCategoryObject._id,
      categoryName : this.editCategoryForm.value.categoryName
    }
    this.categoryService.editCategory(newCategory)
  }
}
