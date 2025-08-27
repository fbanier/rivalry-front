import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {Homepage} from './pages/homepage/homepage';
import {Footer} from './components/footer/footer';
import {Tournaments} from './pages/tournaments/tournaments';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Homepage, Footer, Tournaments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rivalry-front');
}
