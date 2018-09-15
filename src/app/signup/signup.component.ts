import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {};

  constructor(
    private authenticationServ: AuthenticationService,
    private router: Router
  ) { }

  userSignin() {
    this.authenticationServ.signup(this.user)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/login']);
      }, (error) => {
        console.error(error);
      });
  }
  ngOnInit() {
  }

}
