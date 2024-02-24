import { Component } from '@angular/core';
import { AuthorComponent } from '../author/author.component';
import { CategoryComponent } from '../category/category.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AuthorComponent,
    CategoryComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
