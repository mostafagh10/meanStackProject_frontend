import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { UserServiceService } from '../services/user/user-service/user-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    NgIf,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  isLoggedIn: boolean = false;
  token: any = localStorage.getItem('token');
  userId !:String;
  userBooks !: Array<any>;
  updateShelveForm: FormGroup;
  popularBooks !: Array<any>;
  popularCategories !: Array<any>;
  popularAuthors !: Array<any>;

  constructor (private http:HttpClient,private userService:UserServiceService){
    this.updateShelveForm = new FormGroup({
      _id: new FormControl(''),
      shelve: new FormControl('')
    });
  };
  
  ngOnInit() {
    this.checkLoggedIn();

    this.bookService.getData().subscribe((books: any) => {
      this.popularBooks = books.slice(0, 3);
      console.log(this.popularBooks);
    });

    this.categoryService.getData().subscribe((books: any) => {
      this.popularCategories = books.slice(0, 3);
      console.log(this.popularCategories);
    });
    
    this.authorService.getData().subscribe((books: any) => {
      this.popularAuthors = books.slice(0, 3);
      console.log(this.popularAuthors);
    });

    this.http.get(`http://localhost:3000/user/${this.userId}/books`).subscribe((data: any) => {
        this.userBooks = data["the books"];
        console.log('User Books:', this.userBooks);
    });

    


    //to save userId in updateshelveform
    this.updateShelveForm.patchValue({
        _id: this.userId
    });

    


  }

  checkLoggedIn() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = Boolean(token);
    if (token) {
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      this.userId = payload._id;
      console.log('USER_ID: ', this.userId);
    }
  }
  
  toggleUpdateForm(index: number) {
    this.userBooks[index].showForm = !this.userBooks[index].showForm;
  }
  
  handleShelveSubmit(bookId:any){
      console.log(this.updateShelveForm.value);
        this.userService.updateBookShelve(bookId,this.updateShelveForm.value);
    }

  

  
}
