import { Component, Input } from '@angular/core';
import { Status } from '../../enum/status';
import { RouterLink } from '@angular/router';

type Player = {
  name: string;
  image: string;
};

type Card = {
  title: string;
  image: string;
  time?: string;       // optionnel pour les news
  player1?: Player;    // optionnel
  player2?: Player;    // optionnel
  players?: string;    // optionnel
  link: string;
  text?: string;       // ajout pour NEWS
  status: Status;
};

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  imports: [RouterLink],
  styleUrl: './card.css',
  standalone: true,
})
export class card {
  Status = Status;
  @Input() limit: number | null = null;
  @Input() statusCard: Status | null = null;

  cards: Card[] = [
    // --- MATCHS ---
    {
      title: 'Rocket League',
      image: 'rl.jpg',
      time: '4:20',
      player1: { name: 'Amine', image: 'pp1.jpg' },
      player2: { name: 'Lucas', image: 'pp2.jpeg' },
      players: '3/8 players',
      link: '/',
      status: Status.INCOMING,
    },
    {
      title: 'Street Fighter 6',
      image: 'sf6.jpg',
      time: '6:10',
      player1: { name: 'Nina', image: 'pp1.jpg' },
      player2: { name: 'Karim', image: 'pp2.jpeg' },
      players: '8/8 players',
      link: '/',
      status: Status.INPROGRESS,
    },
    {
      title: 'Valorant Tournament',
      image: 'valo.jpg',
      time: '2:05',
      player1: { name: 'Lina', image: 'pp1.jpg' },
      player2: { name: 'Samir', image: 'pp2.jpeg' },
      players: '5/8 players',
      link: '/',
      status: Status.FINISHED,
    },
    {
      title: 'League of Legends',
      image: 'lol.jpg',
      time: '3:45',
      player1: { name: 'Maya', image: 'pp1.jpg' },
      player2: { name: 'Hakim', image: 'pp2.jpeg' },
      players: '7/8 players',
      link: '/',
      status: Status.INCOMING,
    },
    {
      title: 'Valorant Cup',
      image: 'valo.jpg',
      time: '1:15',
      player1: { name: 'Sofia', image: 'pp1.jpg' },
      player2: { name: 'Alex', image: 'pp2.jpeg' },
      players: '6/8 players',
      link: '/',
      status: Status.INPROGRESS,
    },
    {
      title: 'LoL Clash',
      image: 'lol.jpg',
      time: '7:30',
      player1: { name: 'Omar', image: 'pp1.jpg' },
      player2: { name: 'Julie', image: 'pp2.jpeg' },
      players: '8/8 players',
      link: '/',
      status: Status.FINISHED,
    },
  
    // --- NOUVELLES CARTES MATCHS ---
    {
      title: 'Rocket League Night Cup',
      image: 'rl.jpg',
      time: '9:15',
      player1: { name: 'Sami', image: 'pp1.jpg' },
      player2: { name: 'Nora', image: 'pp2.jpeg' },
      players: '5/8 players',
      link: '/',
      status: Status.INPROGRESS,
    },
    {
      title: 'Street Fighter 6 Duel',
      image: 'sf6.jpg',
      time: '11:00',
      player1: { name: 'Kenji', image: 'pp1.jpg' },
      player2: { name: 'Ryu', image: 'pp2.jpeg' },
      players: '2/2 players',
      link: '/',
      status: Status.FINISHED,
    },
    {
      title: 'Valorant Ranked Match',
      image: 'valo.jpg',
      time: '4:50',
      player1: { name: 'Amina', image: 'pp1.jpg' },
      player2: { name: 'Mehdi', image: 'pp2.jpeg' },
      players: '7/10 players',
      link: '/',
      status: Status.INCOMING,
    },
    {
      title: 'LoL ARAM Fun',
      image: 'lol.jpg',
      time: '6:40',
      player1: { name: 'Thomas', image: 'pp1.jpg' },
      player2: { name: 'Claire', image: 'pp2.jpeg' },
      players: '9/10 players',
      link: '/',
      status: Status.INPROGRESS,
    },
  
    // --- NEWS ---
    {
      title: 'Nouveau patch Valorant',
      image: 'valo.jpg',
      text: 'Le nouvel agent a bouleversé la meta avec ses compétences uniques.',
      link: '/',
      status: Status.NEWS,
    },
    {
      title: 'Rocket League Worlds',
      image: 'rl.jpg',
      text: 'Les meilleures équipes du monde s’affrontent ce week-end en finale.',
      link: '/',
      status: Status.NEWS,
    },
    {
      title: 'LoL MSI',
      image: 'lol.jpg',
      text: 'Un tournoi international qui redéfinit le niveau compétitif actuel.',
      link: '/',
      status: Status.NEWS,
    },
  ];
  

  get displayedCards() {
    let displayedCards = this.cards;

    if (this.statusCard !== null && this.statusCard !== undefined) {
      displayedCards = this.cards.filter((c) => c.status === this.statusCard);
    }

    if (this.limit) {
      displayedCards = displayedCards.slice(0, this.limit);
    }

    return displayedCards;
  }
}
