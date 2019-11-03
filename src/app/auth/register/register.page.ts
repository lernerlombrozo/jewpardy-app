import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email:string;
  password:string;

  constructor(
    public authService:AuthService,
    public alertCtrl:AlertController,
    public loadingCtrl:LoadingController,
    ) { }

  ngOnInit() {
  }

  async register(){
    var loading = await  this.loadingCtrl.create(
      {
        message: 'Signing In...',
        spinner: 'crescent',
      }
    )
    loading.present()
    this.authService.register(this.email,this.password)
      .then((success)=>{
        loading.dismiss()
        this.presentAlert('success',JSON.stringify(success))
      })
      .catch((err)=>{
        loading.dismiss()
        this.presentAlert('error',JSON.stringify(err))
      })
  }

  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
