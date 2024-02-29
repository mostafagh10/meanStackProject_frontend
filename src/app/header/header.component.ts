import { ChangeDetectorRef, Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthorsComponent } from '../authors/authors.component';
import { filter } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AuthorsComponent,
    CategoryComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoggedIn: boolean = false;
  token: any = localStorage.getItem('token');
  role !: String;
  currentUrl!: string;
  disableForm : boolean = false;
  constructor(private router: Router,private cdRef: ChangeDetectorRef){
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event.url.indexOf('?') < 0) {
          this.currentUrl = event.url  
        }
        else {
          this.currentUrl = event.url.substring(0, event.url.indexOf('?'));
        }
        const availableRoutes = ['/categories', '/authors', '/books'];
        this.disableForm = !availableRoutes.includes(this.currentUrl);
      });
  }

  ngOnInit() {
    this.checkLoggedIn();
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
    window.location.reload();
  }
}
