import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './admin/author/author.component';
import { EditAuthorComponent } from './admin/author/edit-author/edit-author.component';
import { BookComponent } from './admin/book/book.component';

export const routes: Routes = [
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
