import { Component } from '@angular/core';
import { BooksService } from '../services/books/books.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatPaginatorModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  data: any;
  pagedBook: any[] = [];
  constructor(private booksService: BooksService, private routeObj : Router) { }

 ngOnInit(): void{
     this.booksService.getData().subscribe(books => {
       this.data = books
       this.pagedBook = this.data.slice(0, 4);
     });
 }

 onPageChange(event: any): void {
  const startIndex = event.pageIndex * event.pageSize;
  const endIndex = startIndex + event.pageSize;
  this.pagedBook = this.data.slice(startIndex, endIndex);
}

 view(id: number){
  this.routeObj.navigate(['books', id])
  }
 
  addBook(bookId: string){
    console.log(localStorage.getItem('token'));
    this.booksService.addBook(bookId).subscribe(
      res => {
          alert('You\'ve added this book successfully')
        },
        err => {  
          alert('You already added this book!')
          console.log(err.message);
      }
  )
}

}
