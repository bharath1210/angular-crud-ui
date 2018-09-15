import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
data = {
  name: '',
  author: '',
  year: ''
};
  constructor(private http: HttpClient, private bookServ: BooksService) {
  }

 // post

 postData() {
   console.log(this.data);
  this.bookServ.postList(this.data)
  .subscribe((result: any) => this.data = result);
}
  ngOnInit() {
  }

}
