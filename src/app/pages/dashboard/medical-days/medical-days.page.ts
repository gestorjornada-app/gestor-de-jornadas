import {Component, OnInit} from '@angular/core';
import {CreateNewMedicalDayComponent} from '../../../components/medical-days/create-new-medical-day/create-new-medical-day.component';
import {MedicalDayDetailsComponent} from '../../../components/medical-days/medical-day-details/medical-day-details.component';
import {ModalController, AlertController} from '@ionic/angular';
import {UserService} from '../../../services/user.service';
import {MedicalDayService} from '../../../services/medical-day.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-medical-days',
  templateUrl: 'medical-days.page.html',
  styleUrls: ['medical-days.page.scss']
})
export class MedicalDaysPage implements OnInit {

  public medicalDays: any;
  public medicalDaysCount: number;

  constructor(public modalController: ModalController,
              public userService: UserService,
              private medicalDayService: MedicalDayService,
              public actionSheetController: ActionSheetController,
              public alertController: AlertController) { }

  ngOnInit() {
    this.medicalDayService.getMedicalDaysByUser(this.userService.getUserId()).subscribe(medicalDays => {
      this.medicalDays = medicalDays;
      this.medicalDaysCount = medicalDays.length;
    });
  }

  async openModal() {
    const userId = this.userService.getUserId();
    const modal = await this.modalController.create({
      component: CreateNewMedicalDayComponent,
      componentProps: {
        'userID': userId
      }
    });

    return await modal.present();
  }

  async openVolunteersModal(medicalDay) {
    const userId = this.userService.getUserId();
    const medicalId = medicalDay.id;
    const modal = await this.modalController.create({
      component: MedicalDayDetailsComponent,
      componentProps: {
        'userID': userId,
        'medicalDayID': medicalId
      }
    });

    return await modal.present();
  }

  async presentAlertConfirm(medicalDay) {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: 'Los datos de  <strong>' + medicalDay.name + '</strong> serán borrados permanentemente',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Okay',
          handler: () => {
            this.medicalDayService.deleteMedicalDay(medicalDay.id, this.userService.getUserId());
          }
        }
      ]
    });

    await alert.present();
  }

  async presentActionSheet(medicalDay) {
    const actionSheet = await this.actionSheetController.create({
      header: medicalDay.name,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.presentAlertConfirm(medicalDay);
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Añadir voluntarios',
        icon: 'person-add',
        handler: () => {
          this.openVolunteersModal(medicalDay);
        }
      }, {
        text: 'Favorito',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }

}
