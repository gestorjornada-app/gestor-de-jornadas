import { Injectable } from '@angular/core';
import {MedicalDay} from '../models/medical-day';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase';
import {Volunteer} from '../models/volunteer';

@Injectable({
  providedIn: 'root'
})
export class MedicalDayService {

  constructor(private angularFirestoreDB: AngularFirestore) { }

  getMedicalDaysByUser(userId: string) {
      return this.angularFirestoreDB.collection('users')
          .doc(userId)
          .collection('medical-days')
          .snapshotChanges()
          .pipe(map(rooms => {
              return rooms.map(a => {
                  const data = a.payload.doc.data() as MedicalDay;
                  data.id = a.payload.doc.id;
                  return data;
              });
          }));
  }

  getMedicalDay(userId: string, medicalDayId: string) {
      return this.angularFirestoreDB.collection('users')
          .doc(userId)
          .collection('medical-days')
          .doc(medicalDayId).valueChanges();
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
        createdAt: medicalDay.createdAt,
        enabled: true,
        volunteers: []
      });
  }

    updateVolunteersByMedicalDayId( volunteer: Volunteer, medicalDayId: string, userId: string) {
        this.angularFirestoreDB
            .collection('users')
            .doc(userId)
            .collection('medical-days')
            .doc(medicalDayId).update({
            volunteers : firestore.FieldValue.arrayUnion({
                email: volunteer.email,
                role: volunteer.role,
                createdAt: volunteer.createdAt,
                confirmed: volunteer.confirmed
            }),
        });
    }

  softDeleteMedicalDay(medicalDayId: string, userId: string) {
      this.angularFirestoreDB
          .collection('users')
          .doc(userId)
          .collection('medical-days')
          .doc(medicalDayId)
          .update({'enabled': false});
  }

    deleteMedicalDay(medicalDayId: string, userId: string) {
        this.angularFirestoreDB
            .collection('users')
            .doc(userId)
            .collection('medical-days')
            .doc(medicalDayId)
            .delete();
    }

}
