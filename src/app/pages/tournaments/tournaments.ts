import { Component } from '@angular/core';
import { card } from '../../components/card/card';
import { Status } from '../../enum/status';

@Component({
  selector: 'app-tournaments',
  imports: [card],
  templateUrl: './tournaments.html',
  styleUrl: './tournaments.css'
})
export class Tournaments {
  Status = Status;
  selectedGame: string | null = null;

filterGame(game: string) {
  if (this.selectedGame === game) {
    this.selectedGame = null; // si on reclique, on reset
  } else {
    this.selectedGame = game;
  }
}

}
