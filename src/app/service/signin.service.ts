import { Injectable } from '@angular/core';
import *as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  public user :firebase.User=null;

  constructor(private auth: AngularFireAuth) { }


  public async login() {
    try{
      let provider = new firebase.auth.GoogleAuthProvider();
      await this.auth.signInWithPopup(provider);
      this.user=await this.auth.currentUser;
    }catch(err){
      console.error(err)
    }
  }
  public async exit (){

  }
}
