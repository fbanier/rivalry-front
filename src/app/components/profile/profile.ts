import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../utils/types/UserAuth';
import {Dashboard} from '../../pages/dashboard/dashboard';
import {ApiServiceProtected} from '../../utils/services/api-service-protected';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile  implements OnInit{
  @Input() user! : User

  constructor(private router :  Router) {}

  ngOnInit(): void {
    if (this.user == null) this.router.navigate(['/login'])

    console.log(this.user)
  }





}
