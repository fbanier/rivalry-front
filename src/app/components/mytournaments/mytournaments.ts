import {Component, OnInit} from '@angular/core';
import { card } from '../card/card';
import { Status } from '../../enum/status';
import {User} from '../../utils/types/UserAuth';
import {ApiServiceProtected} from '../../utils/services/api-service-protected';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mytournaments',
  imports: [card],
  templateUrl: './mytournaments.html',
  styleUrl: './mytournaments.css'
})
export class Mytournaments implements OnInit{
  Status = Status

  user : User | null = null;
  private userId : number;

  constructor(private apiService: ApiServiceProtected, private router :  Router) {
    this.userId = Number(apiService.getUserId());
  }

  ngOnInit(): void {
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
  }

}
