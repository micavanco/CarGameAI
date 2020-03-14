
export class Track {

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(600, 350);
    context.scale(1.5, 1);
    context.beginPath();
    context.lineWidth = 10;
    context.arc(0, 0, 322, 0, 6.283185307179586, false);
    context.fillStyle = "#FFFFFF";
    context.stroke();
    context.fillStyle = "#000000";
    context.fill();
    context.closePath();
    context.restore();

    context.save();
    context.translate(600, 350);
    context.scale(1, 0.5);
    context.beginPath();
    context.fillStyle = "#2bbc12";
    context.lineWidth = 10;
    context.arc(0, 0, 322, 0, 6.283185307179586, false);
    context.stroke();
    context.fill();
    context.closePath();
    context.restore();
  }
}
