import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

signup(data) {
  return this.http.post('http://localhost:3000/signup', data);
}

login(data) {
  return this.http.post('http://localhost:3000/login', data);
}


}
