import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiServicePublic } from '../../utils/services/api-service-public';
import { Router } from '@angular/router';

type User = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login-comp',
  imports: [ReactiveFormsModule],
  templateUrl: './login-comp.html',
  styleUrl: './login-comp.css',
})
export class LoginComp {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private apiService: ApiServicePublic, private router: Router) {}

  submitUser() {
    console.log("sub")
  }
}
