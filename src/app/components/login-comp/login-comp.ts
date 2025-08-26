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
    let user = this.form.value as Pick<User, 'email' | 'password'>;
    this.apiService.login(user).subscribe({
      next: res => {
        if (res.accessToken) {
          this.router.navigate(['/']);
          alert(this.apiService.getToken());
        } else {
          alert('Login failed');
        }
      }

    });
  }
}
