import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
data = [];
  constructor( private http: HttpClient) { }

  // get list
  getList() {
    return this.http.get('http://localhost:3000/books');
  }

  getById(id) {
    return this.http.get(`http://localhost:3000/books/${id}`);

  }
  // post data
  postList(data) {
    return this.http.post('http://localhost:3000/books', data);
  }

  // delete data
  deleteList(data) {
    const id = data._id;
    console.log(id);
    return this.http.delete('http://localhost:3000/books/' + id);
  }

  // edit data
  editList(data) {
    const id = data._id;
    return this.http.put('http://localhost:3000/books/' + id, data);
  }
}
