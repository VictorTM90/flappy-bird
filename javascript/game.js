class Game {
  constructor() {
    //todas las propiedades del juego
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.pollo = new Pollo();
    this.pipeArr = [new Pipe(0, "./images/obstacle_top.png")]; // creamos un array con multiples propiedades.
    this.pipeSeparation = 300;
    this.isGameOn = true;
  }

  spawningPipe = () => {
    let lastPipe = this.pipeArr[this.pipeArr.length - 1];
    if (lastPipe.x < canvas.width - 300) {
      let randomY = Math.random() * 100 - 100;
      let newPipe = new Pipe(randomY, "./images/obstacle_top.png");
      this.pipeArr.push(newPipe);

      let randomYDown = randomY + newPipe.height + 200;
      let newPipeDown = new Pipe(randomYDown, "./images/obstacle_bottom.png");
      this.pipeArr.push(newPipeDown);
    }
  };

  checkPolloPipeCollision = (eachPipeParam) => {
    if (
      this.pollo.x < eachPipeParam.x + eachPipeParam.width &&
      this.pollo.x + this.pollo.width > eachPipeParam.x &&
      this.pollo.y < eachPipeParam.y + eachPipeParam.height &&
      this.pollo.height + this.pollo.y > eachPipeParam.y
    ) {

      this.isGameOn = false; 
    canvas.style.display = "none"
    gameOverScreen.style.display = "flex"
    }
  };

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height); // dibuja la imagen
  };
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpia la imagen
  };

  // .todos los métodos del juego

  gameLoop = () => {
    // console.log ("ei un juego")

    // limpiar canvas
    this.clearCanvas();

    // mover elementos u otrar acciones
    this.pollo.polloGravity();
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.pipeMove();
    });
    this.spawningPipe();

    this.pipeArr.forEach((eachPipe) => {
      this.checkPolloPipeCollision(eachPipe);
    });

    // dibujar elementos
    this.drawBackground();
    this.pollo.drawPollo();
    //* mover los pipes
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });

    // recursion para la animación
    if (this.isGameOn){
        requestAnimationFrame(this.gameLoop);
    }
    
  };
}
