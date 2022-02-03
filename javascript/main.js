// * GLOBAL VARIABLES
let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen")
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d")
let newGame;



// * STATE MANAGEMENT FUNCTIONS
const startGame =()=>{
    //desaparecer pag. inicio 
    splashScreen.style.display = "none"
    canvas.style.display = "flex"
    

    //ejecutar mi juego
     newGame = new Game ()
    // console.log (newGame)
   newGame.gameLoop() // arranca el juego 

}

const reStartGame = ()=> {
    gameOverScreen.style.display = "none"
    splashScreen.style.display = "flex" 

    

}




// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn")
  startButton.addEventListener("click", startGame)

canvas.addEventListener("click", ()=>{
    // como hago para invocar la función polloJump
    newGame.pollo.polloJump()
})

let reStartButton = document.querySelector("#restart-btn")
    reStartButton.addEventListener("click", reStartGame )


