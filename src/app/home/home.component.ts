import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

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

  constructor (private http:HttpClient){
    this.updateShelveForm = new FormGroup({
      _id: new FormControl(''),
      shelve: new FormControl('')
    });
  };
  
  ngOnInit() {
    this.checkLoggedIn();
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
      console.log('Current role:', this.userId);
    }
  }
  
  toggleUpdateForm(index: number) {
    this.userBooks[index].showForm = !this.userBooks[index].showForm;
  }
  
  
    handleShelveSubmit(bookId:any){
      console.log(this.updateShelveForm.value);
        this.http.patch(`http://localhost:3000/user/updateShelve/${bookId}`,this.updateShelveForm.value).subscribe((data) => {
          console.log(data);
          window.location.reload();
        })
    }
  

  
}
