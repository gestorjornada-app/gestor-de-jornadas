import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Ups!',
      subHeader: 'Datos incorrectos',
      message: 'Asegurate de ingresar tus datos correctamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmitSignIn() {
    this.authService.signIn(this.email, this.password).then( res => {
      this.router.navigate(['']);
    }).catch(err => this.presentAlert());
  }

  navigateToSignUp() {
    this.router.navigate(['sign-up']);
  }

}
