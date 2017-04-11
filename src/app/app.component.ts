import { Component, OnInit, Directive} from '@angular/core';
import { AuthService } from './providers/auth.service';
import { Router } from "@angular/router";
import {IGoogleProfile} from "./model/googleProfile";

@Component({
  selector: 'app-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  private user_providerId: String;
  private user_photoUrl: String;
  private user_firebaseUid: String;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");

          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.user_providerId = '';
          this.user_photoUrl = '';
          this.user_firebaseUid = '';
          this.router.navigate(['login']);

        } else {

          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          this.user_providerId = auth.google.providerId;
          this.user_photoUrl = auth.google.photoURL;
          this.user_firebaseUid = auth.uid;

          console.log("Logged in");
          console.log(auth);
          this.router.navigate(['main']);
        }
      }
    );
  }

  ngOnInit() {
  }
}
