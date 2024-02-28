import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { AuthorsComponent } from './authors/authors.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'book', component: BookpageComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'category', component: CategoryComponent },
    { path: '**', component: HomeComponent }
];
