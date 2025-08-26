import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { News } from '../../components/news/news';
import { card } from '../../components/card/card';
import { Status } from '../../enum/status';

@Component({
  selector: 'app-homepage',
  imports: [card, News, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  Status = Status;
}
