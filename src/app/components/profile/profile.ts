import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../utils/types/UserAuth';
import {ApiServiceProtected} from '../../utils/services/api-service-protected';
import {Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile  implements OnInit{
  user : User | null = null;
  private userId : number;
  isSubmitted: boolean = false

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });

  constructor(private apiService: ApiServiceProtected, private router :  Router) {
    this.userId = Number(apiService.getUserId());
  }

  ngOnInit(): void {
    if (this.userId > 0){
      this.apiService.getUser(this.userId).subscribe({
        next: data => {
          this.user = data;
          console.log(data)
          if (this.user == null) this.router.navigate(['/'])
        },
        error: err => console.error(err)
      })
    } else {
      this.router.navigate(['/']);
    }
  }

  submitUser() {
    console.log("point")
    let user = this.form.value as User
    console.log(user)
    this.apiService.update(this.userId, user).subscribe(res => {
      this.isSubmitted = true
      console.log(res)
      this.router.navigate(['/dashboard']);
    })
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
