import { Component, Input } from '@angular/core';
import { AuthorPageService } from '../services/user/author-page.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-author-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './author-page.component.html',
  styleUrl: './author-page.component.css'
})
export class AuthorPageComponent {
  @Input() id : string = "";

  currentAuthor !: any;
  authorBooks !: any;
  currentUser !: any;

  constructor(private authorPageService: AuthorPageService) { }

  ngOnInit() {
    this.authorPageService.getAuthor(this.id).subscribe((author: any) => {
      let newDate = new Date(author.dateOfBirth)
      author.newDate = newDate.getFullYear() 
      + '/' + (newDate.getMonth()+1) 
      + '/' + newDate.getDate()
      this.currentAuthor = author
      this.authorPageService.getAuthorBooks(this.id).subscribe((books: any) => {
        this.authorBooks = books
      })
    })
  }



}
