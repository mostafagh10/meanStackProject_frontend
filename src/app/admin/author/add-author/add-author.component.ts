import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../../../services/admin/author/author.service';

@Component({
  selector: 'app-add-author',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {
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

  addAuthor(){
    this.authorService.postAuthor(this.authorForm.value);
    this.authorService.errormessage.subscribe(errorMessage => {
      this.authorerrormessage = errorMessage;
      console.log(errorMessage);
    });
  }

}
