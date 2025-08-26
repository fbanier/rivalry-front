import { Component } from '@angular/core';
type comment = {
  name: string;
  image: string;
  text: string;
}
@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  comments: comment[] = [
    {
      name: 'John Doe',
      image: 'valo.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo sapiente...'
    },
    {
      name: 'John Doe',
      image: 'rl.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo sapiente...'
    },
    {
      name: 'John Doe',
      image: 'lol.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo sapiente...'
    }
  ]
}
