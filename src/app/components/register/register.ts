import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiServicePublic } from '../../utils/services/api-service-public';
import { Router } from '@angular/router';
type User = {
  email: string;
  username: string;
  password: string;
};


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private apiService: ApiServicePublic, private router: Router) {}

  submitUser() {
   // this.apiService.register()

    console.log("sub")
  }
}
