import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../../services/admin/book/book.service';
import { CategoryService } from '../../../services/admin/category/category.service';
import { AuthorService } from '../../../services/admin/author/author.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  categories: Array<any> = [];
  authors : Array<any> = [];
  bookForm: FormGroup;

  constructor(private bookservice:BookService,private categoryservice:CategoryService,private authorservice:AuthorService){
    this.bookForm = new FormGroup({
      bookName: new FormControl(''),
      categoryId: new FormControl(''),
      authorId: new FormControl(''),
      photo: new FormControl(''),
    });
  };

  ngOnInit() {

    this.categoryservice.getCategories().subscribe((data:any) => {
      this.categories = data;
    });

    this.authorservice.getAuthors().subscribe((data:any) => {
      this.authors = data;
    })
  }

  addBook(){
    console.log(this.bookForm.value);
    this.bookservice.postBook(this.bookForm.value);
  }

}
