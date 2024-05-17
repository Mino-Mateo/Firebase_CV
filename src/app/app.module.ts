import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'cvfirebase-8a24c',
        appId: '1:461461926041:web:6dc915d3d89e5273ba4808',
        storageBucket: 'cvfirebase-8a24c.appspot.com',
        apiKey: 'AIzaSyDuCcmD0easO3x1uk5CvbQMB6jYwoLuu7k',
        authDomain: 'cvfirebase-8a24c.firebaseapp.com',
        messagingSenderId: '461461926041',
        measurementId: 'G-X9LGHL26BJ',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
