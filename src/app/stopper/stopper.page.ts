import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-stopper',
  templateUrl: './stopper.page.html',
  styleUrls: ['./stopper.page.scss'],
})
export class StopperPage implements OnInit {

  constructor(public authService: AuthService) { }

  isNotGettingPoints=true;
  ngOnInit() {
    var x = setInterval(()=> {
      if(this.authService.uid && this.isNotGettingPoints){
        this.getMyPoints()
      } else if(!this.isNotGettingPoints){
        clearInterval(x);
      }
    },500);
    
  }

  stop(){
    console.log('here')
    var stopListRef = firebase.database().ref('game/stops');
    var newStopRef = stopListRef.push();
    newStopRef.set({
        user: this.authService.email,
        uid:this.authService.uid
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }


  myPoints = 0;
  getMyPoints(){
    this.isNotGettingPoints = false;
    var gameRef = firebase.database().ref('game/points/'+this.authService.uid);
		gameRef.on('value', (snapshot) => {
			this.myPoints = snapshot.val();
		});
  }

}
