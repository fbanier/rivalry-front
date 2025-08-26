import { Component } from '@angular/core';
import { Profile } from '../../components/profile/profile';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Profile, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
