import { Component } from '@angular/core';
import { AuthorComponent } from '../author/author.component';
import { CategoryComponent } from '../category/category.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AuthorComponent,
    CategoryComponent,
    RouterLink,
    CommonModule,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isAuth!: Boolean;
  
  constructor(private router: Router){}

  ngOninit(){
    const myToken = localStorage.getItem('token');
    console.log(myToken);
    if (myToken) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  test(){
    const myToken = localStorage.getItem('token');
    console.log(myToken);
    if (myToken) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    console.log(this.isAuth);
  }
  
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
