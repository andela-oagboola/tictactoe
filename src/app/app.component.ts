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
  public diagonal1 = [];
  public diagonal2 = [];
  public moves = 0;

  constructor(){}

  userPlay(i, j) {
    if(this.tictac[i][j] == ' ') {
      this.tictac[i][j] = 'X';
      this.moves++;
      this.recordPlay(i, j, 'X');
      if(this.moves != 9) {
        this.randomPlay();
      }
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

  checkforWin(i, j){
    if ( this.playRows[i].length == 3 && !this.playRows[i].includes(undefined)) {
      return this.determineWinner(this.playRows[i])
    }
    if( this.playCols[j].length === 3 && !this.playCols[j].includes(undefined)) {
      return this.determineWinner(this.playCols[j])
    }
    if (this.diagonal1.length == 3 && !this.diagonal1.includes(undefined)) {
      return this.determineWinner(this.diagonal1)
    }
    if (this.diagonal2.length == 3 && !this.diagonal2.includes(undefined)) {
      return this.determineWinner(this.diagonal2)
    }
  }

  determineWinner(collection){
    if(collection.indexOf('X') == -1) {
      alert('Player O wins the game');
      this.reset();
    } else if(collection.indexOf('O') == -1) {
      alert('Player X wins the game');
      this.reset();
    }
  }

  //check if a row, column or diagonal is complete

  recordPlay(i, j, play) {
    if(!this.playRows[i]){
      this.playRows[i] = [];
    }
    if(!this.playCols[j]) {
      this.playCols[j] = [];
    }
    if(i == j) {
      this.diagonal1.push(play)
    }
    if((i == 0 && j == 2) || (i == 2 && j == 0) || (i == 1 && j ==1)){
      this.diagonal2.push(play);
    }
    this.playRows[i][j] = play;
    this.playCols[j][i] = play;
    this.playIndexes.push(i + ',' +j);
    this.checkforWin(i, j);
  }

  reset(){
    this.tictac =
    [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    this.playRows = [];
    this.playCols = []
    this.playIndexes = [];
    this.diagonal1 = [];
    this.diagonal2 = [];
    this.moves = 0;
  }
}

