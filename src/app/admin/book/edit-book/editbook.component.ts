import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookService } from '../../../services/admin/book/book.service';
import { CategoryService } from '../../../services/admin/category/category.service';
import { AuthorService } from '../../../services/admin/author/author.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-editbook',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './editbook.component.html',
  styleUrl: './editbook.component.css'
})
export class EditbookComponent {
  @Input() bookInfo!:Observable<any>;
  categories: Array<any> = [];
  authors : Array<any> = [];
  editBookForm: FormGroup;
  currentBook : any;
  constructor(private bookservice:BookService,private categoryservice:CategoryService,private authorservice:AuthorService) { 
    this.editBookForm = new FormGroup({
      bookName: new FormControl(''),
      categoryId: new FormControl(''),
      authorId: new FormControl(''),
      photo: new FormControl(''),
    });
  }

  ngOnInit(){
    this.bookInfo.subscribe((data:any) => {
      console.log(data);
      this.currentBook = data;
      this.editBookForm.patchValue({
        bookName: data.bookName,
        categoryId : data.categoryId,
        authorId : data.authorId,
        photo:null
      })
    })

    this.categoryservice.getCategories().subscribe((data:any) => {
      this.categories = data;
    });

    this.authorservice.getAuthors().subscribe((data:any) => {
      this.authors = data;
    })
  }

  editBook(){
    if(!this.editBookForm.value.photo){
      this.editBookForm.value.photo = this.currentBook.photo
    }
    console.log(this.currentBook._id,this.editBookForm.value);
    this.bookservice.editBook(this.currentBook._id,this.editBookForm.value);
  }
}
