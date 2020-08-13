import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';


/** Error when invalid control is dirty, touched, or submitted. */




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);
  constructor() { }

  ngOnInit(): void {
  }

 

}
export class MenuOverviewExample {}
