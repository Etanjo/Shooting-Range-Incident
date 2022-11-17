import {uiCanvas, uictx} from "./canvas"
import rangeUrl from "/earthan/range.png"
import woodUrl from '/earthan/wood.png'
import AlphastillUrl from '/jacksoon/Alphastill.png'
import laserUrl from '/earthan/laser.png'
import bulletUrl from '/earthan/bullet.png'
import solderUrl from '/jacksoon/solder.png'
import JuggernautUrl from '/jacksoon/Juggernaut.png'
import DreadnoughtUrl from '/jacksoon/Dreadnought.png'

export let game = {
  loading : false,
  state : 2, //game states: 1 means it hasn't started, 2 is mid-game, and 3 is post-game
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

function drawStart(){
  
}

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
updateGame()