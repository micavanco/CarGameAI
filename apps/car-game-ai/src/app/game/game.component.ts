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
  private carIsTurningTo: string;

  @Input() width: number;
  @Input() height: number;

  private car : Car;

  constructor() {}

  ngAfterViewInit(): void {
    this.context = this.gameCanvas.nativeElement.getContext("2d");
    this.car = new Car(500, 600, 60, 30);
    this.car.draw(this.context);
    this.arrowsMap = {};
    addEventListener('keydown', this.checkKeys.bind(this));
    addEventListener('keyup', this.checkKeys.bind(this));
    setInterval(this.updateGameArea.bind(this), 20);
  }

  updateGameArea() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.car.draw(this.context);
    this.moveCar();
  }

  checkKeys(event) {
    this.arrowsMap[event.key] = event.type === 'keydown';
    this.carIsTurningTo = this.arrowsMap['ArrowLeft'] ?
      'ArrowLeft' : this.arrowsMap['ArrowRight'] ? 'ArrowRight' : undefined;
  }

  moveCar() {
    if(this.arrowsMap['ArrowUp']) {
      const interval = setInterval(()=>{
        this.car.move(this.context, true);
        this.car.rotate(this.context, this.carIsTurningTo, true);
      }, 50);
      setTimeout(() => clearInterval(interval), 500);
    } else if(this.arrowsMap['ArrowDown']) {
      const interval = setInterval(()=>{
        this.car.move(this.context, false);
        this.car.rotate(this.context, this.carIsTurningTo, false);
      }, 50);
      setTimeout(() => clearInterval(interval), 500);
    }
  }

}
