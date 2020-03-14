import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import { Car } from './models/car.model';

@Component({
  selector: 'car-game-ai-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements AfterViewInit {

  @ViewChild("Game") private gameCanvas : ElementRef;

  private context : CanvasRenderingContext2D;
  private arrowsMap: Object;

  @Input() width: number;
  @Input() height: number;

  private car : Car;

  constructor() {}

  ngAfterViewInit(): void {
    this.context = this.gameCanvas.nativeElement.getContext("2d");
    this.car = new Car(500, 600, 60, 30);
    this.car.draw(this.context);
    this.arrowsMap = {};
    addEventListener('keydown', this.moveCar.bind(this));
    addEventListener('keyup', this.moveCar.bind(this));
  }

  moveCar(event) {
    this.arrowsMap[event.key] = event.type === 'keydown';
    const carIsTurningTo = this.arrowsMap['ArrowLeft'] ?
      'ArrowLeft' : this.arrowsMap['ArrowRight'] ? 'ArrowRight' : undefined;

    if(this.arrowsMap['ArrowUp']) {
      this.car.move(this.context, this.width, this.height, carIsTurningTo, true);
    } else if(this.arrowsMap['ArrowDown']) {
      this.car.move(this.context, this.width, this.height, carIsTurningTo, false);
    }
  }

}
