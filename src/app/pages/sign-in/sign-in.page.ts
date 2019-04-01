import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitSignIn() {
    this.authService.signIn(this.email, this.password).then( res => {
      this.router.navigate(['']);
    }).catch(err => alert('Los datos son incorrectos'));
  }

  navigateToSignUp() {
    this.router.navigate(['sign-up']);
  }

}
