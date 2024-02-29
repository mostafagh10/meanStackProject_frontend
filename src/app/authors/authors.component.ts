import { Component } from '@angular/core';
import { AuthorsService } from '../services/authors/authors.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [MatPaginatorModule,RouterLink],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
  
})
export class AuthorsComponent {
constructor(private authorservice:AuthorsService){};
authors !: Array<any>;
pagedAuthors: any[] = [];
//pageSlice !: Array<any>;

ngOnInit(){
  this.authorservice.getData().subscribe((data:any) => {
    this.authors = data;
    this.pagedAuthors = this.authors.slice(0, 3);
  })
}

onPageChange(event: any): void {
  const startIndex = event.pageIndex * event.pageSize;
  const endIndex = startIndex + event.pageSize;
  this.pagedAuthors = this.authors.slice(startIndex, endIndex);
}

}
