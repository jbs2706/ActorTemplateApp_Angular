import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {IGoogleProfile} from "../model/googleProfile";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  private google: IGoogleProfile;

  constructor(public af: AngularFire) { }

  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    return this.af.auth.logout();
  }

  getGoogle(): IGoogleProfile {
    this.google.displayName = this.af.auth.getAuth().google.displayName;
    this.google.email = this.af.auth.getAuth().google.email;
    this.google.photoURL = this.af.auth.getAuth().google.photoURL;
    this.google.providerId = this.af.auth.getAuth().google.providerId;
    this.google.uid = this.af.auth.getAuth().uid;
    return this.google;
  }



  /*
   getAuthUser() : Observable<IGoogleProfile>{
   this.google.displayName = this.af.auth.getAuth().google.displayName;
   this.google.email = this.af.auth.getAuth().google.email;
   this.google.photoURL = this.af.auth.getAuth().google.photoURL;
   this.google.providerId = this.af.auth.getAuth().google.providerId;
   this.google.uid = this.af.auth.getAuth().uid;

   const regObserver : Observable<IGoogleProfile> = this.google;
   return regObserver;
   }
   
   profile.displayName = this.af.auth.getAuth().google.displayName;
   profile.email = this.af.auth.getAuth().google.email;
   profile.photoURL = this.af.auth.getAuth().google.photoURL;
   profile.providerId = this.af.auth.getAuth().google.providerId;
   profile.uid = this.af.auth.getAuth().uid;
   */

}
