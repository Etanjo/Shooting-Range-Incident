import {bCanvas} from './canvas'
import {bctx} from './canvas'
import bulletUrl from './bullet.png';
import laserUrl from './laser.png'
import {alpha} from "../anrrew/movement"
import {greenkill, jugkill, playerKill} from '../anrrew/getshot'
import {player} from './shop'
import {green} from '../brain/enemay'
import {game} from './logistics'


let assetDiv : HTMLDivElement = document.querySelector('#assets');

export var damage 

assetDiv.style.display = 'none'; 

export let bulletImage = document.createElement('img');
bulletImage.src = bulletUrl;
assetDiv.appendChild(bulletImage);

export let laserImage = document.createElement('img');
laserImage.src = laserUrl
assetDiv.appendChild(laserImage)

export let lasers = []
export let bullets = []

export function makeBullet(x, y){
  
  let bullet = {
  x: x,
  y : y,
  speed: 4,
  type: 1,
}
  bullets.push(bullet)
  return bullet;
}


export function makeLaser () {
  let laser =  {
    x:alpha.x + 1123,
    y: alpha.y + 37.5,
    speed:20,
    damage: damage
  }
  lasers.push(laser);
  return laser;
}


let startTime = null;

function updateBullet(bullet, elapsed: number){
  bullet.x += (bullet.speed*(60/game.framerate))
  
}

function drawBullet(bullet){
  bctx.drawImage(bulletImage, bullet.x, bullet.y)

}

function updateLaser(laser, elapsed: number){
  laser.x -= (laser.speed*(60/game.framerate))
  if(laser.x < -5){
    lasers.splice(laser, 1)
  }
}



function drawLaser(laser){
  bctx.drawImage(laserImage, laser.x, laser.y)
}

export function animateShots(){

 bctx.clearRect(0,0,bCanvas.width, bCanvas.height)
lasers.forEach(updateLaser)
lasers.forEach(drawLaser)
lasers.forEach(greenkill)
lasers.forEach(jugkill)
bullets.forEach(updateBullet)
bullets.forEach(drawBullet)
bullets.forEach(playerKill)
  if(game.state == 2){
requestAnimationFrame(animateShots)
  }
}




