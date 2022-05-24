import {bCanvas} from './canvas'
import {bctx} from './canvas'
import bulletUrl from './bullet.png';
let assetDiv : HTMLDivElement = document.querySelector('#assets');

assetDiv.style.display = 'none'; // hide the images

export let bulletImage = document.createElement('img');
bulletImage.src = bulletUrl;
assetDiv.appendChild(bulletImage);

export let bullet = {
  x : 0,
  y : 325,
  speed: 5,}

function animateBullet(){
  bctx.clearRect(0,0,bCanvas.width, bCanvas.height)
  bctx.drawImage(bulletImage, bullet.x, bullet.y)
  bullet.x += bullet.speed
  requestAnimationFrame(animateBullet)
}
/*bulletImage.addEventListener('load', e=>{
  animateBullet()
})*/
