import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  button1: string = '';
  button2: string = '';
  button3: string = '';
  button4: string = '';
  button5: string = '';
  button6: string = '';
  button7: string = '';
  button8: string = '';
  button9: string = '';

  onClick() {
    console.log('hahaa');
  }
}
