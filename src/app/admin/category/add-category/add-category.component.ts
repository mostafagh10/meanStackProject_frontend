import { Component } from '@angular/core';
import { CategoryService } from '../../../services/admin/category/category.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  
  categoryForm : FormGroup;

  constructor (private categoryService:CategoryService){ 
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('')
    })
  }

  addCategory() {
    this.categoryService.addCategory(this.categoryForm.value)
  }
}
