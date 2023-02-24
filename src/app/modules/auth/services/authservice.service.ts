import { NewAccountService } from './../../main/services/account/new-account.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
// import * as auth from 'firebase/auth'
import * as auth from 'firebase/auth'
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sessionGoogle = new BehaviorSubject<boolean>(false);
  setGoogleOut(google: boolean) {
    this.sessionGoogle.next(google);
  }
  getGoogleObservOut(): Observable<boolean> {
    return this.sessionGoogle.asObservable();
  }
  getGoogleSubjectOut() {
    return this.sessionGoogle.getValue();
  }
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private readonly createAccountService: NewAccountService
  ) {}

  GoogleAuth(): Promise<firebase.auth.UserCredential> {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  private AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider);

  }
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.router.navigate(['home']);
          }
        });
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  isEmail(email: string) {
    return this.afAuth.fetchSignInMethodsForEmail(email).then(signInMethods => {
      if (signInMethods.length > 0) {
        return true;
        localStorage.clear();
        sessionStorage.clear();
      } else {
        return false;
      }
    });
  }
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        this.SetUserData(result.user);
      })
      .catch(error => {
        this.SetUserData({});
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  get isLoggedIn(): boolean {
    if (localStorage.getItem('id')) return true;
    return false;
  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('uid');
      localStorage.removeItem('token');
      localStorage.clear();
      this.router.navigate(['login']);
      localStorage.clear();
    });
  }
}
