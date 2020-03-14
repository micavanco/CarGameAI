
export class Car {

  private positionX: number;
  private positionY: number;
  private degrees: number;
  private readonly width: number;
  private readonly height: number;

  constructor(positionX, positionY, width, height) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.degrees = 90;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.translate( this.positionX + this.width/2, this.positionY + this.height/2 );
    context.rotate(this.degrees * Math.PI/180);
    context.strokeRect(-this.width/2,-this.height/2, this.width, this.height);
    context.restore();
  }

  move(context: CanvasRenderingContext2D, goForward:boolean) {
    if(goForward) {
      this.positionX-=(Math.cos(this.degrees  * Math.PI / 180));
      this.positionY-=(Math.sin(this.degrees  * Math.PI / 180));
    } else {
      this.positionX+=(Math.cos(this.degrees  * Math.PI / 180));
      this.positionY+=(Math.sin(this.degrees  * Math.PI / 180));
    }
  }

  rotate(context: CanvasRenderingContext2D, carIsTurningTo: string, goForward:boolean) {
    if(goForward) {
      if(carIsTurningTo === 'ArrowLeft') {
        this.degrees -= 1;
      }
      if(carIsTurningTo === 'ArrowRight') {
        this.degrees += 1;
      }

    } else {
      if(carIsTurningTo === 'ArrowLeft') {
        this.degrees += 1;
      }
      if(carIsTurningTo === 'ArrowRight') {
        this.degrees -= 1;
      }
    }
  }

}
