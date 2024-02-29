import { ChangeDetectorRef, Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from '../authors/authors.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AuthorsComponent,
    CategoryComponent,
    RouterLink,
    CommonModule,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  isLoggedIn: boolean = false;
  token: any = localStorage.getItem('token');
  role !: String;
  constructor(private router: Router,private cdRef: ChangeDetectorRef){}
  isAuth!: Boolean;

    ngOninit(){
    this.checkLoggedIn();
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
     
  checkLoggedIn() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = Boolean(token);
    if (token) {
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      this.role = payload.role;
      console.log('Current role:', this.role);
    }
  }

  logOut() {
    this.token = localStorage.removeItem('token');
    this.checkLoggedIn();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
