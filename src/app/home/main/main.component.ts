import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { CategoriesComponent } from '../categories/categories.component';
import { AuthorsComponent } from '../authors/authors.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutComponent , CategoriesComponent , AuthorsComponent , FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
