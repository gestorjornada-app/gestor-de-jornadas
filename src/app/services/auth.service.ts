import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router,
  private userService: UserService) { }

  signIn(email: string, password: string) {
    return new Promise(((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => reject(err));
    }));

  }

  signUp(email, password, user) {
    return new Promise(((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(result => {
        this.userService.createUser(user, result.user.uid);
        resolve(result);
      }).catch(err => reject(err));
    }));
  }

  signOut() {
    this.AFauth.auth.signOut().then( () => {
      this.router.navigate(['/sign-in']);
    });
  }

}
