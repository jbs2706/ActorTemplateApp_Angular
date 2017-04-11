import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import {IGoogleProfile} from "../../model/googleProfile";

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit {
  private user_displayName: String;
  private user_email: String;
  private user_providerId: String;
  private user_photoUrl: String;
  private user_firebaseUid: String;

  google: IGoogleProfile;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.user_displayName = '';
          this.user_email = '';
          this.user_providerId = '';
          this.user_photoUrl = '';
          this.user_firebaseUid = '';
        } else {
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          this.user_providerId = auth.google.providerId;
          this.user_photoUrl = auth.google.photoURL;
          this.user_firebaseUid = auth.uid;
        }
      }
    );

  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
    location.reload()
  }

}


