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
  public playRows = [];
  public playCols = []
  public playIndexes = [];
  public diagonal1 = ['0,0', '1,1', '2,2'];
  public diagonal2 = ['0,2', '1,1', '2,0'];
  public moves = 0;
  public corners = ['0,0', '0,2', '2,0', '2,2'];
  public middle = ['1,1'];

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

  checkforWin(){
  }

  recordPlay(i, j, play) {j
    console.log('i and j', i, j)
    if(!this.playRows[i]){
      this.playRows[i] = [];
    }
    if(!this.playCols[j]) {
      this.playCols[j] = [];
    }
    this.playRows[i][j] = play;
    this.playCols[j][i] = play;
    this.playIndexes.push(i + ',' +j)
  }
}

