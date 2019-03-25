import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  registerCredentials = { fullName: '', phoneNumber: '', address: '', email: '', password: '', confirmationPassword: ''}
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitSignUp() {
    console.log(this.registerCredentials);
    this.authService.signUp(this.registerCredentials).then( res => {
      this.router.navigate(['']);
    }).catch(err => {
      window.alert(err.message);
    });

  }

}
