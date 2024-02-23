import { Component } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { CategoryService } from '../../services/category/category.service';
import { AuthorService } from '../../services/author/author.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,AddbookComponent,EditbookComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books : Array<any> = [];

  constructor(private bookservice:BookService){};

  ngOnInit() {
    this.bookservice.getBooks().subscribe((data:any) => {
        this.books = data;
    });
  }

  deleteBook(bookId:any){
    this.bookservice.deleteBook(bookId);
  }

  currentBook : Subject<any>= new Subject<any>();;
  sendBook(book : any) {
    this.currentBook.next(book);
  }

}