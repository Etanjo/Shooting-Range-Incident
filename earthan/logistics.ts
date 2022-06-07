import {uiCanvas, uictx} from "./canvas"
import rangeUrl from "/earthan/range.png"
import woodUrl from '/earthan/wood.png'
import AlphastillUrl from '/jacksoon/Alphastill.png'
import laserUrl from '/earthan/laser.png'
import bulletUrl from '/earthan/bullet.png'
import solderUrl from '/jacksoon/solder.png'
import JuggernautUrl from '/jacksoon/Juggernaut.png'
import DreadnoughtUrl from '/jacksoon/Dreadnought.png'

export let range = addToAssets(rangeUrl)
let wood = addToAssets(woodUrl)
let alpha1 = addToAssets(AlphastillUrl)
let laser = addToAssets(laserUrl)
let bullet = addToAssets(bulletUrl)
let soldier = addToAssets(solderUrl)
let jug = addToAssets(JuggernautUrl)
let dread = addToAssets(DreadnoughtUrl)
let assetDiv = document.querySelector('#assets')

function addToAssets(asset){
  let img = document.createElement('img')
  img.setAttribute('src',asset)
  assetDiv.appendChild(img)
  return img
}

addToAssets(range)
addToAssets(wood)
addToAssets(alpha1)
addToAssets(laser)
addToAssets(bullet)
addToAssets(soldier)
addToAssets(jug)
addToAssets(dread)

export let game = {
  loading : true,
  state : 1, //game states: 1 means it hasn't started, 2 is mid-game, and 3 is post-game
  loads: 10, // loads = how many things need to load
  
}

range.addEventListener('load', function(event){game.loads -= 1})
wood.addEventListener('load', function(event){game.loads -= 1})
alpha1.addEventListener('load', function(event){game.loads -= 1})
laser.addEventListener('load', function(event){game.loads -= 1})
bullet.addEventListener('load', function(event){game.loads -= 1})
soldier.addEventListener('load', function(event){game.loads -= 1})
jug.addEventListener('load', function(event){game.loads -= 1})
dread.addEventListener('load', function(event){game.loads -= 1})
  


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
  debugger;
  if (game.loads == 0){
    game.loading = false
  }
  if (game.loading = true){
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