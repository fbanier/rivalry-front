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
    {
      title: 'Valorantddddd',
      image: 'valo.jpg',
      time: '5:55',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '6/8 players',
      link: '/',
      status: Status.INCOMING,
    },
    {
      title: 'lolddddddd',
      image: 'lol.jpg',
      time: '1:41',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '7/8 players',
      link: '/',
      status: Status.INPROGRESS,
    },
    {
      title: 'sf6',
      image: 'sf6.jpg',
      time: '2:30',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '5/8 players',
      link: '/',
      status: Status.FINISHED,
    },
    {
      title: 'Valorantddddd',
      image: 'valo.jpg',
      time: '5:55',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '6/8 players',
      link: '/',
      status: Status.INCOMING,
    },
    {
      title: 'lolddddddd',
      image: 'lol.jpg',
      time: '1:41',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '7/8 players',
      link: '/',
      status: Status.INPROGRESS,
    },
    {
      title: 'sf6',
      image: 'sf6.jpg',
      time: '2:30',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '5/8 players',
      link: '/',
      status: Status.FINISHED,
    },
    {
      title: 'Valorantddddd',
      image: 'valo.jpg',
      time: '5:55',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '6/8 players',
      link: '/',
      status: Status.INCOMING,
    },
    {
      title: 'lolddddddd',
      image: 'lol.jpg',
      time: '1:41',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '7/8 players',
      link: '/',
      status: Status.INPROGRESS,
    },
    {
      title: 'sf6',
      image: 'sf6.jpg',
      time: '2:30',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '5/8 players',
      link: '/',
      status: Status.FINISHED,
    },
    {
      title: 'Valorantddddd',
      image: 'valo.jpg',
      time: '5:55',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '6/8 players',
      link: '/',
      status: Status.INCOMING,
    },
    {
      title: 'lolddddddd',
      image: 'lol.jpg',
      time: '1:41',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '7/8 players',
      link: '/',
      status: Status.INPROGRESS,
    },
    {
      title: 'sf6',
      image: 'sf6.jpg',
      time: '2:30',
      player1: { name: 'yamine', image: 'pp1.jpg' },
      player2: { name: 'thomas', image: 'pp2.jpeg' },
      players: '5/8 players',
      link: '/',
      status: Status.FINISHED,
    },
  
    // --- CARTES NEWS ---
    {
      title: 'John Doe',
      image: 'valo.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo sapiente...',
      link: '/',
      status: Status.NEWS,
    },
    {
      title: 'John Doe',
      image: 'rl.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo sapiente...',
      link: '/',
      status: Status.NEWS,
    },
    {
      title: 'John Doe',
      image: 'lol.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo sapiente...',
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
