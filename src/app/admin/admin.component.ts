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

}
