import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {MedicalDayService} from '../../../services/medical-day.service';
import {Volunteer} from '../../../models/volunteer';
import * as moment from 'moment';
@Component({
  selector: 'app-medical-day-details',
  templateUrl: './medical-day-details.component.html',
  styleUrls: ['./medical-day-details.component.scss'],
})
export class MedicalDayDetailsComponent implements OnInit {

  userId: string;
  medicalDayId: string;
  role: string;
  volunteerEmail: string;
  now = moment().format('DD/MM/YYYY hh:mm A');
  public medicalDay: any;

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private medicalDayService: MedicalDayService) { }

  ngOnInit() {
    this.userId = this.navParams.data.userID;
    this.medicalDayId = this.navParams.data.medicalDayID;
    this.medicalDayService.getMedicalDay(this.userId, this.medicalDayId).subscribe( medicalDay => {
        this.medicalDay = medicalDay;
        }
    );
  }

  closeModal() {
    const onClosedData = 'Wrapped Up!';
    this.modalController.dismiss(onClosedData);
  }

  onSubmitVolunteer() {
    const volunteer: Volunteer = {
      email: this.volunteerEmail,
      role: this.role,
      createdAt: this.now,
      confirmed: false
    };
    this.medicalDayService.updateVolunteersByMedicalDayId(volunteer, this.medicalDayId, this.userId);
    this.role = '';
    this.volunteerEmail = '';
  }
}
