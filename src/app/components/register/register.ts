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
