
export class Car {

  private positionX: number;
  private positionY: number;
  private readonly width: number;
  private readonly height: number;

  constructor(positionX, positionY, width, height) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
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

}
