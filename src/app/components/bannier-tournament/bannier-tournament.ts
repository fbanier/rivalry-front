import { Component } from '@angular/core';
import { Tournament } from '../../utils/types/Tournament';

@Component({
  selector: 'app-bannier-tournament',
  imports: [],
  templateUrl: './bannier-tournament.html',
  styleUrl: './bannier-tournament.css'
})
export class BannierTournament {
  card: Tournament = {
      id : 0,
      name : "tournaments 1",
      description :"description",
      beginDate : "date",
      endDate : "date",
      format : "format",
      numberOfPlayers : 0,
      game : 0,
      status : "status",
      isActive : true,
      playerList : []
  }

}
