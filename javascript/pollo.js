class Pollo {
  constructor() {
    // propiedades
    this.x = 100; // posicion
    this.y = canvas.height / 2; // posicion
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.img.src = "./images/flappy.png";
    this.gravitySpeed = 2.5;
    this.jumpSpeed = 45;
  }

  // MÉTODOS

  drawPollo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  polloGravity = () => {
    this.y = this.y + this.gravitySpeed;
  };

  polloJump = () => {
    this.y = this.y - this.jumpSpeed;
  };
}
