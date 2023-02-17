import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['banco/home']);
    });
  }
  // Auth logic to run auth providers
  private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['banco/home']);
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result.user));
        // this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
   SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['banco/login']);
    });
  }
}
