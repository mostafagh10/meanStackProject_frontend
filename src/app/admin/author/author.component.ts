import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../../services/author/author.service';
import { RouterLink } from '@angular/router';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf,RouterLink,EditAuthorComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  authors: Array<any> = [];
  authorForm: FormGroup;
  authorerrormessage !: String;
  constructor(private authorService:AuthorService) { 
    this.authorForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      photo: new FormControl(''),
    });
  }

  ngOnInit() {
    this.authorService.getAuthors().subscribe((data:any) => {
        this.authors = data;
    });
  }

  addAuthor(){
    this.authorService.postAuthor(this.authorForm.value);
    this.authorService.errormessage.subscribe(errorMessage => {
      this.authorerrormessage = errorMessage;
      console.log(errorMessage);
    });
  }

  deleteAuthor(authorId: any) {
    this.authorService.deleteAuthor(authorId);
  }

  currentauthor : Subject<any>= new Subject<any>();;
  sendauthor(author : any) {
    this.currentauthor.next(author);
  }

}