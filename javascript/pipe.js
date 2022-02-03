class Pipe {
  constructor(postYparam, srcParam) {
    this.x = canvas.width;
    this.y = postYparam;
    this.width = 50;
    this.height = 140;
    this.img = new Image();
    this.img.src = srcParam;
  }

  drawPipe = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  pipeMove = () => {
    this.x = this.x - 3;
  };
}
