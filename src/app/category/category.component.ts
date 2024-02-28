import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CategoriesService } from '../services/categories/categories.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  
  data: any;
  constructor(private categoriesService: CategoriesService) { }

 ngOnInit(): void{
     this.categoriesService.getData().subscribe(categories => {
       this.data = categories
     });
 }

}
