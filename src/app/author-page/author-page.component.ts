import { Component, Input } from '@angular/core';
import { AuthorPageService } from '../services/user/author-page.service';

@Component({
  selector: 'app-author-page',
  standalone: true,
  imports: [],
  templateUrl: './author-page.component.html',
  styleUrl: './author-page.component.css'
})
export class AuthorPageComponent {
  @Input() id : string = "";

  currentAuthor !: any;
  authorBooks !: any;

  constructor(private authorPageService: AuthorPageService) { }

  ngOnInit() {
    this.authorPageService.getAuthor(this.id).subscribe((author: any) => {
      let newDate = new Date(author.dateOfBirth)
      author.newDate = newDate
      this.currentAuthor = author
      this.authorPageService.getAuthorBooks(this.id).subscribe((books: any) => {
        this.authorBooks = books
        console.log(books)
      })
      console.log(author)
    })
  }



}
