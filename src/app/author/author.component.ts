import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthorsService } from '../services/authors/authors.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

  data: any;
  constructor(private authorsService: AuthorsService) { }

 ngOnInit(): void{
     this.authorsService.getData().subscribe(authors => {
       this.data = authors
     });
     console.log(this.data);
     
 }
 
}
