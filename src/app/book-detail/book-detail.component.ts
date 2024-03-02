import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books/books.service';
import { Book } from '../User/Interfaces/Book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  
  bookDetails !: any;
  constructor(private acRoute: ActivatedRoute, private http: HttpClient, private booksService: BooksService){
    // this.src = "127.0.0.1:3000"
  } 

  imageSrc: any;

  ngOnInit(){
    const id = this.acRoute.snapshot.params['id'];
      this.booksService
          .getOneBook(id)
          .subscribe((data) => {
              this.bookDetails = data; 
              console.log(this.bookDetails.bookInfo.photo);
              this.test(this.bookDetails.bookInfo.photo).subscribe( (image) => {
                this.imageSrc = URL.createObjectURL(image);
                console.log(this.imageSrc);
              })      
            });
    }

    test(photo: any){
        const url = `http://127.0.0.1:3000/book/book-image/${photo}`;
        return this.http.get(url, { responseType: 'blob' });
    }
}
