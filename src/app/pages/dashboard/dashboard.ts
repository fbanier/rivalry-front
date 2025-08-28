import {Component, Injectable, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Status } from '../../enum/status';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ApiServicePublic} from '../../utils/services/api-service-public';
import {ApiServiceProtected} from '../../utils/services/api-service-protected';
import {User} from '../../utils/types/UserAuth';

@Component({
  selector: 'app-dashboard',
  standalone: true,

  imports: [ReactiveFormsModule, FormsModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard{
  private userId : number;

  constructor(private apiService: ApiServiceProtected, private router :  Router) {
    this.userId = Number(apiService.getUserId());
  }

  getUser() : User | null{
    if (this.userId > 0){
      this.apiService.getUser(this.userId).subscribe({
        next: data => {
           return data;
        },
        error: err => console.error(err)
      })
    }
    return null
  }

/*  ngOnInit(): void {
    if (this.userId > 0){
      this.apiService.getUser(this.userId).subscribe({
        next: data => {
          this.user = data;
          if (this.user == null) this.router.navigate(['/'])
        },
        error: err => console.error(err)
      })
    } else {
      this.router.navigate(['/']);
    }
  }*/
}
