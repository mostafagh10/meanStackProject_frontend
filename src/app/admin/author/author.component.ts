import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../../services/admin/author/author.service';
import { RouterLink } from '@angular/router';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { Subject } from 'rxjs';
import { AddAuthorComponent } from './add-author/add-author.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf,RouterLink,EditAuthorComponent,AddAuthorComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  authors: Array<any> = [];
  constructor(private authorService:AuthorService) {}

  ngOnInit() {
    this.authorService.getAuthors().subscribe((data:any) => {
        this.authors = data;
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