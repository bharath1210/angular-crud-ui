import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};

  constructor(
    private authenticationServ: AuthenticationService,
    private router: Router
    ) { }

  userLogin() {
    this.authenticationServ.login(this.user)
    .subscribe((result: any) => {localStorage.setItem('userid', result.userId);
  this.router.navigate(['/view']);
  } );
  }
  ngOnInit() {
  }

}
