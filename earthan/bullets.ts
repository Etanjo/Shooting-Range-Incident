import {bCanvas} from './canvas'
import {bctx} from './canvas'
import bulletUrl from './bullet.png';
import laserUrl from './laser.png'
import {alpha} from "/anrrew/movement"
import {laserkill} from '/anrrew/getshot'
import {money} from './shop'
import {green} from '/brain/enemay'

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

export function makeBullet(){
  
  let bullet = {
  x : 0,
  y : 325,
  speed: 5,
  type: 1,
}
  bullets.push(bullet)
  return bullet;
}


export function makeLaser () {
  let laser =  {
    x:alpha.x + 1125,
    y: alpha.y,
    speed:5,
    damage: damage
  }
  lasers.push(laser);
  return laser;
}



function updateBullet(bullet){
  bullet.x += bullet.speed
  
}

function drawBullet(bullet){
  bctx.drawImage(bulletImage, bullet.x, bullet.y)
}

function updateLaser(laser){
  laser.x -= laser.speed
  if(laser.x < -5){
    lasers.splice(laser, 1)
  }
}



function drawLaser(laser){
  bctx.drawImage(laserImage, laser.x, laser.y)
}

function animateShots(){
 bctx.clearRect(0,0,bCanvas.width, bCanvas.height)
lasers.forEach(updateLaser)
lasers.forEach(drawLaser)
lasers.forEach(laserkill)
bullets.forEach(updateBullet)
bullets.forEach(drawBullet)
  
requestAnimationFrame(animateShots)
}


document.addEventListener('keyup', function(event){
  if(event.key == 'e'){
    //shots.push(laser)
    makeLaser()
    console.log(lasers)
       //animateShots()
  }
})
animateShots()

