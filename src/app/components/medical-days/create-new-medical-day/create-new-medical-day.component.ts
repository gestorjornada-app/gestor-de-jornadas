import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-create-new-medical-day',
  templateUrl: './create-new-medical-day.component.html',
  styleUrls: ['./create-new-medical-day.component.scss'],
})
export class CreateNewMedicalDayComponent implements OnInit {

  modalTitle: string;
  modelId: number;

  constructor(private modalController: ModalController,
              private navParams: NavParams) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  closeModal() {
    const onClosedData = 'Wrapped Up!';
    this.modalController.dismiss(onClosedData);
  }
}
