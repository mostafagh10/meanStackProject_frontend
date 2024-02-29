import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent {
  CategoryDetails !: any;
  constructor(private activeRoute: ActivatedRoute, private categoryService: CategoriesService){} 
  
  ngOnInit(){
    const id = this.activeRoute.snapshot.params['id'];
      this.categoryService
          .getCategoryDetails(id)
          .subscribe((data) => {
              this.CategoryDetails = data;     
              console.log(this.CategoryDetails);
            });
    }
}
