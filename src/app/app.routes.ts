import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { HomeComponent } from './home/home.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { AuthorsComponent } from './authors/authors.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './admin/author/author.component';
import { BookComponent } from './admin/book/book.component';

export const routes: Routes = [
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
        path: 'book', 
        component: BookpageComponent 
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
        path: '**', 
        component: HomeComponent 
    }
];
