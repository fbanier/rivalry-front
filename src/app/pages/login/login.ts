import { Component } from '@angular/core';
import { LoginComp } from '../../components/login-comp/login-comp';
import { Register } from '../../components/register/register';
@Component({
  selector: 'app-login',
  imports: [LoginComp,Register],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}

