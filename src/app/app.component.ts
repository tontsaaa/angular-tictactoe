import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  button0: string = '';
  button1: string = '';
  button2: string = '';
  button3: string = '';
  button4: string = '';
  button5: string = '';
  button6: string = '';
  button7: string = '';
  button8: string = '';
  array: string[] = ['', '', '', '', '', '', '', '', ''];
  player: string = 'X';
  message: string = 'Player 1';
  gameOver: boolean = false;

  constructor() {}

  onClick(index: number) {
    if (this.array[index] === '') {
      this.array[index] = this.player;
      switch (index) {
        case 0:
          this.button0 = this.player;
          if (this.array[1] === this.player && this.array[2] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[3] === this.player && this.array[6] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[4] === this.player && this.array[8] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          break;
        case 1:
          this.button1 = this.player;
          if (this.array[0] === this.player && this.array[2] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[4] === this.player && this.array[7] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          break;
        case 2:
          this.button2 = this.player;
          if (this.array[0] === this.player && this.array[1] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[4] === this.player && this.array[6] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[5] === this.player && this.array[8] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          break;
        case 3:
          this.button3 = this.player;
          if (this.array[0] === this.player && this.array[6] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[4] === this.player && this.array[5] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          break;
        case 4:
          this.button4 = this.player;
          if (this.array[0] === this.player && this.array[8] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[2] === this.player && this.array[6] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[1] === this.player && this.array[7] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[3] === this.player && this.array[5] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          break;
        case 5:
          this.button5 = this.player;
          if (this.array[2] === this.player && this.array[8] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[3] === this.player && this.array[4] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          break;
        case 6:
          this.button6 = this.player;
          if (this.array[0] === this.player && this.array[3] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[4] === this.player && this.array[2] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[7] === this.player && this.array[8] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          break;
        case 7:
          this.button7 = this.player;
          if (this.array[4] === this.player && this.array[1] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[6] === this.player && this.array[8] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          break;
        case 8:
          this.button8 = this.player;
          if (this.array[4] === this.player && this.array[0] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[5] === this.player && this.array[2] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          if (this.array[7] === this.player && this.array[6] === this.player) {
            this.gameOver = true;
            if (this.player === 'X') {
              this.message = 'Player 1 wins!';
            } else {
              this.message = 'Player 2 wins!';
            }
          }
          break;
      }

      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] === '') {
          break;
        }
        if (i === 8) {
          this.gameOver = true;
          this.message = 'Draw!';
        }
      }

      if (this.gameOver === false) {
        if (this.player === 'X') {
          this.player = 'O';
          this.message = 'Player 2';
        } else {
          this.player = 'X';
          this.message = 'Player 1';
        }
      }
    }
  }

  reset() {
    this.button0 = '';
    this.button1 = '';
    this.button2 = '';
    this.button3 = '';
    this.button4 = '';
    this.button5 = '';
    this.button6 = '';
    this.button7 = '';
    this.button8 = '';
    this.array = ['', '', '', '', '', '', '', '', ''];
    this.player = 'X';
    this.message = 'Player 1';
    this.gameOver = false;
  }
}
