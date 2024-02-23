import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CategoryComponent,BookComponent,AuthorComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  bookComponent !: any;
  categoryComponent !: any;


  ngOnInit() {
    this.bookComponent = document.getElementById('bookComponent')
    this.categoryComponent = document.getElementById('categoryComponent')
  }

  showCategories() {
    this.categoryComponent.classList = ""
    this.bookComponent.classList = "hidden"
  }
  showBooks() {
    this.categoryComponent.classList = "hidden"
    this.bookComponent.classList = ""
  }
}
