import { Component } from '@angular/core';
import {CreateNewMedicalDayComponent} from '../components/medical-days/create-new-medical-day/create-new-medical-day.component';
import {ModalController} from '@ionic/angular';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController, authService: AuthService) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: CreateNewMedicalDayComponent,
      componentProps: {
        'paramID': 'Firebase user 123',
        'paramTitle': 'Test Title'
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);
      }
    });

    return await modal.present();
  }
}
