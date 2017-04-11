import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../providers/auth.service";
import {Router} from "@angular/router";
import {IUser} from "../../../model/user";

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {
  user: IUser;
  errorMessage: string;

  constructor(public authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }

}
