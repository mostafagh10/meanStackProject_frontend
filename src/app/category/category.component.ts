import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories/categories.service';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,MatPaginatorModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  data: any;
  pagedCategories: any[] = [];

  constructor(private categoriesService: CategoriesService, private router : Router) { }

  ngOnInit(): void {
    this.categoriesService.getData().subscribe((categories: any) => {
      this.data = categories;
      this.pagedCategories = this.data.slice(0, 3);
    });
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedCategories = this.data.slice(startIndex, endIndex);
  }

  ReadMore(categoryID:any){
    this.router.navigate(['categories', categoryID])
  }
  
}
