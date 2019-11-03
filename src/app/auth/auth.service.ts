import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  uid:string;
  email:string;

  signin(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  register(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  recoverPassword(email){
    return firebase.auth().sendPasswordResetEmail(email)
  }
}
