import { Component, OnInit , OnChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnChanges {
  books = [];

  constructor(private http: HttpClient, private bookServ: BooksService) { }

showlist() {
  this.bookServ.getList()
  .subscribe((result: any) => this.books = result);
}

remove(book) {
  console.log(book);
  this.bookServ.deleteList(book)
  .subscribe((result: any) => this.books = result);
  console.log(this.books);
}


  ngOnInit() {
    this.showlist();
  }
  ngOnChanges() {
    this.showlist();
  }


}
