import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    public router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService:AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      firebase.initializeApp(environment.firebaseConfig);
      firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
          // User is signed in.
          console.log('user is signed in');
          this.authService.email = user.email;
          this.authService.uid = user.uid;
          this.router.navigateByUrl("/stopper");
          // ...
        } else {
          // User is signed out.
          this.router.navigateByUrl("/auth");
          // ...
        }
      });
    });
  }
}
