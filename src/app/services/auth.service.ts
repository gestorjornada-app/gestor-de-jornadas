import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) { }

  signIn(email: string, password: string) {
    return new Promise(((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => reject(err));
    }));

  }

  signUp(credentials) {
    return this.AFauth.auth.createUserWithEmailAndPassword( credentials.email, credentials.password).then( result => {
      window.alert('Registro exitoso');
      console.log(result.user.uid);
    }).catch( error => {
      window.alert(error.message);
    });
  }
}
