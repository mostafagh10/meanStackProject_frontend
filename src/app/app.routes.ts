import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { CategoryComponent } from './category/category.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookComponent } from './book/book.component';

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
            path: "categories",
            component: CategoryComponent,
            title: "Categories"
        },
        {
            path: "**",
            component: NotfoundComponent
        }
];
