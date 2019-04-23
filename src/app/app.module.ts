import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { firebaseConfig} from '../environments/environment';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {CreateNewMedicalDayComponent} from './components/medical-days/create-new-medical-day/create-new-medical-day.component';
import {MedicalDayDetailsComponent} from './components/medical-days/medical-day-details/medical-day-details.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CreateNewMedicalDayComponent, MedicalDayDetailsComponent],
  entryComponents: [CreateNewMedicalDayComponent, MedicalDayDetailsComponent],
  imports: [FormsModule, BrowserModule, AngularFirestoreModule, IonicModule.forRoot(),
    AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
