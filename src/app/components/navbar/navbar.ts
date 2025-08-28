import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {ApiServicePublic} from '../../utils/services/api-service-public';
import {User} from '../../utils/types/UserAuth';
import {UserPublic} from '../../utils/types/UserPublic';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  public isLogged : boolean = false;
  private userId : number;
  user : UserPublic | null = null;

  constructor(private apiService: ApiServicePublic, private router :  Router) {
    this.userId = Number(apiService.getUserId());
  }

  ngOnInit(): void {
    if (this.apiService.getToken() != null) this.isLogged = true;
    if (this.userId > 0){
      this.apiService.getUser(this.userId).subscribe({
        next: data => {
          this.user = data;
          console.log(data)
          if (this.user == null) this.router.navigate(['/'])
        },
        error: err => console.error(err)
      })
    }
  }
}
