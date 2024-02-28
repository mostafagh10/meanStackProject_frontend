import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { CategoryComponent } from './category/category.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorsComponent } from './authors/authors.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

export const routes: Routes = [
 
    {
        path: "",
        component: HomeComponent,
        title: "Home"
    },
    {
        path: "authors",
        component: AuthorComponent,
        title: "Authors"
    },
    {
        path: "books",
        component: BookComponent,
        title: "Books"
    },
    {
        path: "books/:id",
        component: BookDetailComponent,
        title: "Book Detail"
        },
    {
        path: "categories",
        component: CategoryComponent,
        title: "Categories"
    },
    {
        path: "**",
        component: NotfoundComponent
    },
    { 
        path: 'admin/login', 
        component: AdminLoginComponent
    },
    { 
        path: 'admin/addAdmin', 
        component: AdminRegisterComponent
    },
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: 'authors',
         component: AuthorsComponent 
    },
    {
        path: 'admin',
        component : AdminComponent,
        title : "Admin"
    },
    {
        path: 'admin/authors',
        component: AuthorComponent,
        title: 'authors management'
    },
    {
        path: 'admin/book',
        component: BookComponent,
        title: 'book'
    },
    {
        path: 'authors/:id',
        component: AuthorPageComponent
    },
    { 
      path: 'category', 
      component: CategoryComponent 
    },
    { 
        path: '**', 
        component: HomeComponent 
    }
];
