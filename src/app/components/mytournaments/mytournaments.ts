import { Component } from '@angular/core';
import { card } from '../card/card';
import { Status } from '../../enum/status';

@Component({
  selector: 'app-mytournaments',
  imports: [card],
  templateUrl: './mytournaments.html',
  styleUrl: './mytournaments.css'
})
export class Mytournaments {
  Status = Status
}
