import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {MedicalDayService} from '../../../services/medical-day.service';
import {MedicalDay} from '../../../models/medical-day';
import * as moment from 'moment';

@Component({
  selector: 'app-create-new-medical-day',
  templateUrl: './create-new-medical-day.component.html',
  styleUrls: ['./create-new-medical-day.component.scss'],
})
export class CreateNewMedicalDayComponent implements OnInit {

  userId: string;
  medicalDayName: string;
  medicalDayStartDate: string;
  medicalDayEndDate: string;
  medicalDayLocation: string;
  medicalDayDescription: string;
  now = moment().format('DD/MM/YYYY hh:mm A');

  constructor(private modalController: ModalController,
              private navParams: NavParams,
  private medicalDayService: MedicalDayService) { }

  ngOnInit() {
    this.userId = this.navParams.data.userID;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  createMedicalDay() {
    const medicalDay: MedicalDay = {
      name: this.medicalDayName,
      description: this.medicalDayDescription,
      startDate: moment(this.medicalDayStartDate).format('DD/MM/YYYY hh:mm A'),
      endDate:  moment(this.medicalDayEndDate).format('DD/MM/YYYY hh:mm A'),
      location: this.medicalDayLocation,
      createdAt: this.now
    };
    this.medicalDayService.createMedicalDay(medicalDay, this.userId);
    this.closeModal();
  }
}
