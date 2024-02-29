import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books/books.service';
import { Book } from '../User/Interfaces/Book';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
   
  bookDetails !: any;
  constructor(private acRoute: ActivatedRoute, private booksService: BooksService){} 
  
  ngOnInit(){
    const id = this.acRoute.snapshot.params['id'];
      this.booksService
          .getOneBook(id)
          .subscribe((data) => {
              this.bookDetails = data;          
            });
    }

}
