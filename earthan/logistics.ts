import {eCanvas, ectx, uiCanvas, uictx, bCanvas, bctx, pCanvas, pctx, jugCanvas, jugctx} from "./canvas"
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
import {animatealpha, alpha} from '../anrrew/movement'


let greenInterval
let jugInterval
let bgInterval

export let game = {
  loading : false,
  state : 1, //game states: 1 means it hasn't started, 2 is mid-game, and 3 is post-game
  loads: 10, // loads = how many things need to load
  framerate: 60,
  frameCounting: true,
  frameCount: 0,
}

function countFrames(){
  if(game.frameCounting){
    game.frameCount+=1
    requestAnimationFrame(countFrames)
  }
}
countFrames()

function stopCounting (){
  game.framerate = game.frameCount
  game.frameCounting = false
  console.log(game.framerate)
  player.maxScoreStage = game.framerate
}
setTimeout(stopCounting, 1000)


import {player, updateScores, dmg} from './shop'

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
  animatealpha()
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

  greenInterval = setInterval(greenAnimation,180)

  jugInterval = setInterval(jugAnimation, 45)

  bgInterval = setInterval(showNextFrame, 1000/12)
}

function laserRemove(laser){
  lasers.splice(laser, 1)
}

function bulletRemove(bullet){
  bullets.splice(bullet, 1)
}

export function endGame(){
clearInterval(greenInterval)
clearInterval(jugInterval)
clearInterval(bgInterval)
ectx?.clearRect(0,0, eCanvas.width, eCanvas.height)
pctx?.clearRect(0,0, pCanvas.width, pCanvas.height)
bctx?.clearRect(0,0, bCanvas.width, bCanvas.height)
jugctx?.clearRect(0,0, jugCanvas.width, jugCanvas.height)
bullets.splice(0, bullets.length)
lasers.splice(0, lasers.length)
}

let restartListener = 0

export function drawShotEndScreen(){
  uictx.beginPath()
  uictx.fillStyle = 'black'
  uictx.fillRect(0,0,uiCanvas.width,uiCanvas.height)
  uictx.font = "50px Rajdhani"
  uictx.textAlign = "center"
  uictx.strokeStyle = "DarkRed"
  uictx.fillStyle = "DarkRed"
  uictx.strokeText("Agent Alpha KIA", uiCanvas.width/2,50)
  uictx.fillText("Agent Alpha KIA", uiCanvas.width/2,50)
  uictx.strokeText("Cause of Death: Bullet Wound", uiCanvas.width/2,101)
  uictx.fillText("Cause of Death: Bullet Wound", uiCanvas.width/2,101)
  uictx?.beginPath
  uictx.font = "25px Rajdhani"
  uictx.textAlign = "center"
  uictx.fillStyle = "DarkRed"
  uictx.strokeStyle = "DarkRed"
  uictx?.strokeText(`End Score: ${player.score}`, uiCanvas.width/2, 127)
  uictx?.fillText(`End Score: ${player.score}`, uiCanvas.width/2, 127)
  uictx.beginPath()
  uictx.fillStyle = 'DarkRed'
  uictx.font = "50px Rajdhani"
  uictx.textAlign  = 'center'
  uictx.strokeStyle = 'GhostWhite'
  uictx.strokeText("Press R to Restart",uiCanvas.width/2,uiCanvas.height-50)
  uictx.fillText("Press R to Restart",uiCanvas.width/2,uiCanvas.height-50)
  if(restartListener < 1){
    window.addEventListener('keydown', function(event){
      if(event.key == 'r' && game.state == 3){
        restartGame()
      }

    })
    restartListener +=1
  }
}

function restartGame(){
player.score = 0
player.scoreStage = 0
alpha.x = 100
alpha.y = 100
green.x = 100
green.y = 160
jug.x = 100
jug.y = 100
player.money = 0
player.damage = 1
dmg.moneyNeeded = 1000
uictx.clearRect(0,0,uiCanvas.width,uiCanvas.height)
game.state = 2
  gameStartup()
}