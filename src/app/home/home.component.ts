import { Component } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  data: any;
   constructor(private dataService: MyDataService) { }

  books: any;

  ngOnInit(): void{
      this.dataService.getData().subscribe(todos => {
        this.data = todos
      });
  }

}
