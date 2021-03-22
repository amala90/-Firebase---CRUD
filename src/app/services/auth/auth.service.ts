import {User  } from 'src/app/models/user.model';
import { empty, Observable, observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import auth from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { SignupComponent } from 'src/app/components/Authentification/signup/signup.component';
import { UserProfileComponent } from 'src/app/components/user-profile/user-profile.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(User => {
      if (User) {
        localStorage.setItem('user', JSON.stringify(User));
      } else {
        localStorage.setItem('user', '');
      }
    });
  }

  CreateNewUser(signUpForm: any) {
    return this.afAuth.createUserWithEmailAndPassword(signUpForm.email, signUpForm.password).then((result) => {
    }).catch((error) => {
      window.alert(error.message);
    });
  }
  signIn(signInForm) {
    return this.afAuth.signInWithEmailAndPassword(signInForm.email, signInForm.password).then((result) => {
      this.router.navigate(['/user-profile']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  SignInWithGoogle() {
    var provider = new auth.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider).then((result) => {
      this.SetUserData(result.user);
      this.router.navigate(['/user-profile']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }
  SetUserData(user, userName?) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc('user/${user.uid}');
    const userData: User = {
      id:user.uid,
      email: user.email,
      userName: userName || user.displayName,
    } ;
    return userRef.set(userData, {
      merge: true
    });
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return (user !== '') ? true : false;
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['signin']);
    });
  }

}