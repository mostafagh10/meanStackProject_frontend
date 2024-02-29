import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CategoriesService } from '../services/categories/categories.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,MatPaginatorModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  
  data: any;
  pagedCategories: any[] = [];
  constructor(private categoriesService: CategoriesService) { }

 ngOnInit(): void{
     this.categoriesService.getData().subscribe(categories => {
       this.data = categories;
       this.pagedCategories = this.data.slice(0, 3);
     });
 }

 onPageChange(event: any): void {
  const startIndex = event.pageIndex * event.pageSize;
  const endIndex = startIndex + event.pageSize;
  this.pagedCategories = this.data.slice(startIndex, endIndex);
}

}
