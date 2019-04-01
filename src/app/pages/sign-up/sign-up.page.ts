import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import {User} from '../../models/user';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  phoneNumber: any;
  address: any;
  email: any;
  password: any;
  confirmationPassword: any;
  firstName: any;
  institution: any;
  lastName: any;
  profession: any;


  constructor(private authService: AuthService, private router: Router,
              private userService: UserService, private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onSubmitSignUp() {
    this.authService.signUp(this.email, this.password).then( res => {
      this.router.navigate(['']);
    }).catch(err => {
      window.alert(err.message);
    }).then(res => {
      const user: User = {email: this.email, firstName: this.firstName, lastName: this.lastName,
        phoneNumber: this.phoneNumber, address: this.address, profession: this.profession,
        institution: this.institution};
      this.userService.createUser(user, this.angularFireAuth.auth.currentUser.uid);
      console.log(this.angularFireAuth.auth.currentUser.uid);
      console.log(user);
    });
  }

}
