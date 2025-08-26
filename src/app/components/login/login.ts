import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

type User = {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  user: User = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log(this.user);
  }
}
