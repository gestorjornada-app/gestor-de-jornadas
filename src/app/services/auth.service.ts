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
    return this.AFauth.auth.createUserWithEmailAndPassword( email, password).then( result => {
      window.alert('Registro exitoso');
      this.userService.createUser(user, result.user.uid);
    }).catch( error => {
      window.alert(error.message);
    });
  }

  signOut() {
    this.AFauth.auth.signOut().then( () => {
      this.router.navigate(['/sign-in']);
    });
  }

}
