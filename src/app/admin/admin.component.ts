import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { LoginService } from '../services/admin/login/login.service';
import { Router } from '@angular/router';

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
  authorComponent !: any;

  constructor(
    private loginService: LoginService,
    private router: Router
    ){ }

  ngOnInit() {
    this.bookComponent = document.getElementById('bookComponent')
    this.categoryComponent = document.getElementById('categoryComponent')
    this.authorComponent = document.getElementById('authorComponent')
  }

  showCategories() {
    this.categoryComponent.classList = ""
    this.bookComponent.classList = "hidden"
    this.authorComponent.classList = "hidden"
  }
  showBooks() {
    this.categoryComponent.classList = "hidden"
    this.bookComponent.classList = ""
    this.authorComponent.classList = "hidden"
  }
  showAuthors() {
    this.categoryComponent.classList = "hidden"
    this.bookComponent.classList = "hidden"
    this.authorComponent.classList = ""
  }

  checkLogin() {
    if(!this.loginService.checkLoggedIn()) {
      this.router.navigate(['/admin/login']).then();
    }
  }

}
