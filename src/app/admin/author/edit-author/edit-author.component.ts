import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorService } from '../../../services/author/author.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-author',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.css'
})
export class EditAuthorComponent {
  @Input() authorinfo!: Observable<any>;
  editauthorForm: FormGroup;
  currentAuthor : any;
  constructor(private authorService:AuthorService) { 
    this.editauthorForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      photo: new FormControl(''),
    });
  }

  ngOnInit(){
    this.authorinfo.subscribe((data:any) => {
      console.log(data);
      this.currentAuthor = data;
      this.editauthorForm.patchValue({
        firstName: data.firstName,
        lastName : data.lastName,
        dateOfBirth : data.dateOfBirth,
        photo:null
      })
    })
  }

  editAuthor(){
    if(!this.editauthorForm.value.photo){
      this.editauthorForm.value.photo = this.currentAuthor.photo
    }
    console.log(this.currentAuthor._id,this.editauthorForm.value);
    this.authorService.editAuthor(this.currentAuthor._id,this.editauthorForm.value);
  }

}