import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent, 
            RouterOutlet, NavbarComponent],
            //  MatPaginatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 

}
