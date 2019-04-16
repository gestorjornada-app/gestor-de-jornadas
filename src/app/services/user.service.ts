import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private angularFirestoreDB: AngularFirestore, private angularFireAuth: AngularFireAuth) { }

  getUser(userId: string) {return this.angularFirestoreDB.collection('users').doc(userId).valueChanges(); }

  getUserId() {return this.angularFireAuth.auth.currentUser.uid; }

  createUser(user: User, userId: string) {
    this.angularFirestoreDB
        .collection('users')
        .doc(userId)
        .set({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          address: user.address,
          profession: user.profession,
          institution: user.institution
        });
  }

}
