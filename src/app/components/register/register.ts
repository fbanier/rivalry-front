import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ApiServicePublic } from '../../utils/services/api-service-public';
import { Router } from '@angular/router';
import { UserRegister, UserPublic} from '../../utils/types/UserPublic';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  isSubmitted: boolean = false

  newUser: UserRegister = {
    email: "",
    username: "",
    password: "",
    active : true
  }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private apiService: ApiServicePublic, private router :  Router) {}


  submitUser() {
    if (this.form.valid) {
      this.isSubmitted = true
      let user = this.form.value as UserRegister
      this.apiService.register({...user, active: true}).subscribe(res => {
        this.apiService.login(user).subscribe(res => {
          console.log('Response', res);
          console.log('Logged!');
          this.router.navigate(['/']);
        })
      })
    }
  }

  loginUser(){
    this.isSubmitted = true
    let user = this.form.value as UserRegister
    this.apiService.login(user).subscribe(res => {
      console.log('Response', res);
      console.log('Logged!');
      this.router.navigate(['/']);
    })
  }





}
