import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import { Car } from './models/car.model';

@Component({
  selector: 'car-game-ai-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements AfterViewInit {

  @ViewChild("Game") private gameCanvas : ElementRef;

  @Input() width: number;
  @Input() height: number;

  private car : Car;

  constructor() {}

  ngAfterViewInit(): void {
    const context = this.gameCanvas.nativeElement.getContext("2d");
    this.car = new Car(500, 600, 30, 60);
    this.car.draw(context);
  }

}
