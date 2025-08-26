import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../utils/services/api-service';
import { Router } from '@angular/router';

type User = {
  email: string;
  username: string;
  password: string;
};

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private apiService: ApiService, private router: Router) {}

  submitUser() {
    let user = this.form.value as Pick<User, 'email' | 'username' | 'password'>;
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
