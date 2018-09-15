import { Component, OnInit } from '@angular/core';

import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bookId: string;
  book: any = {};
  constructor(
    private bookServ: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // update

  edit() {
    this.bookServ.editList(this.book)
      .subscribe(
        (result: any) => {
          this.router.navigate(['/view']);
      },
      error => {
        console.log(error);
        window.alert('Something Wrong');
      }
      );
  }



  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.bookServ.getById(this.bookId)
      .subscribe(result => {
        this.book = result;
      });
  }

}
