import {Component, OnInit} from '@angular/core';
import {CreateNewMedicalDayComponent} from '../components/medical-days/create-new-medical-day/create-new-medical-day.component';
import {ModalController} from '@ionic/angular';
import {UserService} from '../services/user.service';
import {MedicalDayService} from '../services/medical-day.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public medicalDays: any;
  public medicalDaysCount: number;

  constructor(public modalController: ModalController, public userService: UserService, private medicalDayService: MedicalDayService) { }

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

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);
      }
    });

    return await modal.present();
  }
}
