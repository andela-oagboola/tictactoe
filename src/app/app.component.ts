import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public tictac =
  [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  public plays = [];
  public winnable = [];
  public moves = 0;

  constructor(){}

  userPlay(i, j) {
    this.tictac[i][j] = 'X';
    this.moves++;
    this.recordPlay(i, j, 'X');
    if(this.moves != 9) {
      this.randomPlay();
    }
  }

  autoPlay(i, j){
    this.tictac[i][j] = 'O';
    this.moves++;
    this.recordPlay(i, j, 'O');
  }

  randomPlay(){
    const i = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    const j = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    if (this.tictac[i][j] !== ' ') {
      this.randomPlay();
    } else {
      this.autoPlay(i, j);
    }
  }

  checkforWin(){}

  recordPlay(i, j, play) {
    if(!this.plays[i]){
      this.plays[i] = [];
    }
    this.plays[i][j] = play;
  }
}
