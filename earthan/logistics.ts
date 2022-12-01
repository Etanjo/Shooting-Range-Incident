import {uiCanvas, uictx} from "./canvas"
/*import rangeUrl from "/earthan/range.png"
import woodUrl from '/earthan/wood.png'
import AlphastillUrl from '/jacksoon/Alphastill.png'
import laserUrl from '/earthan/laser.png'
import bulletUrl from '../earthan/bullet.png'
import solderUrl from '../jacksoon/solder.png'
import JuggernautUrl from '../jacksoon/Juggernaut.png'
import DreadnoughtUrl from '../jacksoon/Dreadnought.png'*/
import {jug, animatejug, jugImage, jugAnimation} from '../anrrew/jugger'
import {animateShots, lasers, bullets, makeLaser} from './bullets'
import {jugShoot, greenShoot} from './enemyshoot'
import {showNextFrame} from './background'
import {green, greenImage, animategreen, greenAnimation} from '../brain/enemay'
import {updateScores} from './shop'


export let game = {
  loading : false,
  state : 1, //game states: 1 means it hasn't started, 2 is mid-game, and 3 is post-game
  loads: 10, // loads = how many things need to load
  
}

function drawLoad(){
  uictx.beginPath
  uictx.fillStyle = 'black'
  uictx.fillRect(0,0,uiCanvas.width,uiCanvas.height)
  uictx.stroke()
  uictx.beginPath
  uictx.fillStyle = 'DarkRed'
  uictx.strokeStyle = 'DarkRed'
  uictx.fillText("Loading...", uiCanvas.width/2, uiCanvas.height/2)
  uictx.stroke()
}

let startListenerCount = 0

function drawStart(){
  uictx.beginPath()
  uictx.fillStyle = 'black'
  uictx.fillRect(0,0,uiCanvas.width,uiCanvas.height)
  uictx.font = "50px Rajdhani"
  uictx.textAlign = "center"
  uictx.strokeStyle = "DarkRed"
  uictx.fillStyle = "DarkRed"
  uictx.strokeText("Welcome Soldier!", uiCanvas.width/2,50)
  uictx.fillText("Welcome Soldier!", uiCanvas.width/2,50)
  uictx.beginPath()
  uictx.fillStyle = 'DarkRed'
  uictx.font = "50px Rajdhani"
  uictx.textAlign  = 'center'
  uictx.strokeStyle = 'GhostWhite'
  uictx.strokeText("Press Space to Start",       uiCanvas.width/2,uiCanvas.height-50)
  uictx.fillText("Press Space to Start",   uiCanvas.width/2,uiCanvas.height-50)
  uictx.beginPath()
  uictx.font = "30px Rajdhani"
  uictx.fillStyle = "DarkRed"
  uictx.textAlign = "center"
  uictx.fillText("Are you ready to defend our favorite bartender?",uiCanvas.width/2, 100)
  uictx.fillText("Defend Bart Jenkins by shooting enemies with e or f.",uiCanvas.width/2, 130)
  uictx.fillText("Dodge enemy projectiles with WASD and the arrow keys",uiCanvas.width/2, 160)
  uictx.fillText("Take the bart bucks you earn to upgrade!",uiCanvas.width/2, 190)
  uictx.fillText("Gear up and prepare to fight, godspeed Alpha",uiCanvas.width/2, 220)
if(startListenerCount == 0){
  startListenerCount += 1
  window.addEventListener('keydown', function(event){
    if(event.key == ' ' && game.state == 1){
      game.state = 2
      uictx.clearRect(0,0,uiCanvas.width,uiCanvas.height)
      gameStartup()
    }
  })
    
}
}

drawStart()

function updateGame(){
  if (game.loads == 0){
    game.loading = false
  }
  if (game.loading == true){
    drawLoad()
  } else
    if(game.state == 1){
      drawStart()
    }
  else{
    uictx.clearRect(0,0,uiCanvas.width,uiCanvas.height)
  }
  requestAnimationFrame(updateGame)
}


function gameStartup(){
animatejug()
  
  document.addEventListener('keyup', function(event){
  if(event.key == 'e' && game.state == 2 || event.key == 'f' && game.state == 2){
    //shots.push(laser)
    makeLaser()
    console.log(lasers)
       //animateShots()
  }
})
  
greenShoot()
jugShoot()
  
  animateShots()

  animategreen() 

  updateScores()

  let greenInterval = setInterval(greenAnimation,180)

  let jugInterval = setInterval(jugAnimation, 45)

  let bgInterval = setInterval(showNextFrame, 1000/12)
}

//export function 