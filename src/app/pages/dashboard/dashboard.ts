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

}
