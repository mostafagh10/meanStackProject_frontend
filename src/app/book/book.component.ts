import { Component } from '@angular/core';
import { BooksService } from '../services/books/books.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  data: any;
  constructor(private booksService: BooksService, private routeObj : Router) { }

 ngOnInit(): void{
     this.booksService.getData().subscribe(books => {
       this.data = books
     });
 }

 view(id: number){
  this.routeObj.navigate(['books', id])
}
 
}
