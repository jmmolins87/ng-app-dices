import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public diceLeft: string = './../assets/images/dice1.png';
  public diceRight: string = './../assets/images/dice4.png';
  public numOne!: number;
  public numTwo!: number;

  throwDices() {
    this.numOne = Math.round( Math.random() * 5 ) + 1;
    this.numTwo = Math.round( Math.random() * 5 ) + 1;
    this.diceLeft = `../assets/images/dice${ this.numOne }.png`;
    this.diceRight = `../assets/images/dice${ this.numTwo }.png`;
  }
}
