import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userObs: Observable<firebase.User> = null;
  user: firebase.User = null;
  isLogged: boolean = false;
  firstAuthDataArrived: boolean = false;

  constructor(private afa: AngularFireAuth) {
    this.userObs = afa.authState;
    this.userObs.subscribe((user) => {
      this.user = user;
      this.isLogged = Boolean(user);
      this.firstAuthDataArrived = true;
    });
  }

  createUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  emailPasswordLogin(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  googleLogin(): Promise<void> {
    return this.afa.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(): Promise<void> {
    return this.afa.signOut();
  }
}
