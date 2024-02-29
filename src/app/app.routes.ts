import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorsComponent } from './authors/authors.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { RegisterComponent } from './UserSide/register/register.component';
import { LoginComponent } from './UserSide/login/login.component';
import { UserBooksComponent } from './user-books/user-books.component';

export const routes: Routes = [
 
    {
        path: "",
        component: HomeComponent,
        title: "Home"
    },
    {
        path: "register",
        component: RegisterComponent,
        title: "Register a new account"
    },
    {
        path: "login",
        component: LoginComponent,
        title: "Login to your profile"
    },
    {
        path: "authors",
        component: AuthorsComponent,
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
        path:"userbooks",
        component:UserBooksComponent,
        title:"user books"
    },
    {
        path: 'admin',
        component : AdminComponent,
        title : "Admin"
    },
    { 
        path: 'admin/login', 
        component: AdminLoginComponent
    },
    { 
        path: 'addAdmin', 
        component: AdminRegisterComponent
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
        path: "**",
        component: NotfoundComponent
    }
];
