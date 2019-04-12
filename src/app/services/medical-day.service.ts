import { Injectable } from '@angular/core';
import {MedicalDay} from '../models/medical-day';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MedicalDayService {

  constructor(private angularFirestoreDB: AngularFirestore) { }

  getMedicalDaysByUser(userId: string) {return this.angularFirestoreDB
      .collection('users')
      .doc(userId)
      .collection('medical-days')
      .valueChanges();
  }

  createMedicalDay(medicalDay: MedicalDay, userId: string) {
    const id = this.angularFirestoreDB.createId();
    this.angularFirestoreDB
      .collection('users')
      .doc(userId)
      .collection('medical-days')
      .doc(id).set({
        name: medicalDay.name,
        description: medicalDay.description,
        startDate: medicalDay.startDate,
        endDate: medicalDay.endDate,
        location: medicalDay.location,
        createdAt: medicalDay.createdAt
      });
  }

}
