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

  ngOnInit() {
  }

  stop(){
    console.log('here')
    var postListRef = firebase.database().ref('game/stops');
    var newPostRef = postListRef.push();
    newPostRef.set({
        user: this.authService.email
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

}
