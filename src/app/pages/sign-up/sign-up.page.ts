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
  currentDate = new Date();
  dateTime = this.currentDate.getDate() + '/'
      + (this.currentDate.getMonth() + 1)  + '/'
      + this.currentDate.getFullYear() + ' '
      + this.currentDate.getHours() + ':'
      + this.currentDate.getMinutes() + ':'
      + this.currentDate.getSeconds();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitSignUp() {
    const user: User = {phoneNumber: this.phoneNumber, address: this.address, email: this.email,
      firstName: this.firstName, institution: this.institution, lastName: this.lastName, profession: this.profession,
      createdAt: this.dateTime
    };
    this.authService.signUp(this.email, this.password, user).then(res => {
      this.router.navigate(['']);
    }).catch(err => {
      window.alert(err.message);
    });
  }

}
