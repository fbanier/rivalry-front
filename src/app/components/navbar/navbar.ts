import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {ApiServicePublic} from '../../utils/services/api-service-public';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  public isLogged : boolean = false;

  constructor(private apiService: ApiServicePublic) {}

  ngOnInit(): void {
    if (this.apiService.getToken() != null)
      this.isLogged = true;
    }



}
