import {
  AfterContentInit,
  afterNextRender,
  AfterViewChecked,
  AfterViewInit,
  Component, ElementRef, Inject,
  OnDestroy,
  OnInit, PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { ApiServicePublic } from '../../utils/services/api-service-public';
import { error } from 'node:console'
import {ApiServiceAdmin} from '../../utils/services/api-service-admin';
import {UserRegister} from '../../utils/types/UserPublic';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test implements OnInit, OnDestroy{
  isBrowser: boolean | undefined;
  constructor(private apiServicePublic : ApiServicePublic, private apiService : ApiServiceAdmin, @Inject(PLATFORM_ID) private platformId: Object){}


  private user : UserRegister = {
    username : "toto",
    email : "rivalry@mail.com",
    password : "root123",
    active : true
  }


  // Au chargement du composant
  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.apiServicePublic.login(this.user).subscribe({
        next: data => {
          //localStorage.setItem('token', data)
          console.log(data);
        },
        error: err => console.error(err)
      })
    }
    /* this.apiServicePublic.login(this.user).subscribe({
       next: data => {
         console.log(data);
       },
       error: err => console.error(err)
     })*/
  }

  ngAfterContentInit(): void {
   /* this.apiServicePublic.getUser(2n).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => console.error(err)
    })*/
/*    this.apiServicePublic.login(this.user).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => console.error(err)
    })*/
  }




  ngOnDestroy(): void {
    console.log("On destroy");
  }
}
