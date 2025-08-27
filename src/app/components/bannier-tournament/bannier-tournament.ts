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
      name : "Tournament valorant",
      description :"Get ready for an intense 8-player Valorant showdown! Players will battle it out in a competitive tournament format, showcasing skill, strategy, and teamwork. Only one will rise to the top and claim victory—who will be the champion?",
      beginDate : "21/08/25",
      endDate : "date",
      format : "format",
      numberOfPlayers : 8,
      game : 1,
      status : "status",
      isActive : true,
      playerList : []
  }

}
