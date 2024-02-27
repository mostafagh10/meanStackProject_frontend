import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { AuthorsComponent } from './authors/authors.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './admin/author/author.component';
import { EditAuthorComponent } from './admin/author/edit-author/edit-author.component';
import { BookComponent } from './admin/book/book.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'book', component: BookpageComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: '**', component: HomeComponent },
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
    }
];
