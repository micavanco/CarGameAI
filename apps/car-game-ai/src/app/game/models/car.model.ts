
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
    context.strokeRect(this.positionX, this.positionY, this.width, this.height);
  }

  set cordinateX(positionX) {
    this.positionX = positionX;
  }

  set cordinateY(positionY) {
    this.positionY = positionY;
  }

  move(context: CanvasRenderingContext2D,
              canvasWidth:number,
              canvasHeight:number,
              carIsTurningTo:string,
              goForward:boolean
  ) {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.save();
    context.beginPath();
    this.rotate(context, carIsTurningTo, goForward);
    context.strokeRect(-this.width/2,-this.height/2, this.width, this.height);
    context.restore();
  }

  rotate(context: CanvasRenderingContext2D, carIsTurningTo: string, goForward:boolean) {
    if(goForward) {
      if(carIsTurningTo === 'ArrowLeft') {
        this.degrees -= 1;
      }
      if(carIsTurningTo === 'ArrowRight') {
        this.degrees += 1;
      }
      this.positionX-=Math.cos(this.degrees  * Math.PI / 180) * 5;
      this.positionY-=Math.sin(this.degrees  * Math.PI / 180) * 5;
    } else {
      if(carIsTurningTo === 'ArrowLeft') {
        this.degrees += 1;
      }
      if(carIsTurningTo === 'ArrowRight') {
        this.degrees -= 1;
      }
      this.positionX+=Math.cos(this.degrees  * Math.PI / 180) * 5;
      this.positionY+=Math.sin(this.degrees  * Math.PI / 180) * 5;
    }

    context.translate( this.positionX + this.width/2, this.positionY + this.height/2 );
    context.rotate(this.degrees * Math.PI/180)
  }

}
