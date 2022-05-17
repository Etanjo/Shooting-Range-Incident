//fcanvas and fctx will be replaced by ethan's canvas names
import alphaUrl from './jacksoon/alpha.png';

let assetDiv : HTMLDivElement = document.querySelector('#jacksoon');

export let alphaImage = document.createElement('img');
alphaImage.src = alphaUrl;
assetDiv.appendChild(alphaImage);
  
function drawalpha () {
  let fctx = fcanvas.getContext('2d');
  fctx.resetTransform();
  fctx.clearRect(0,0,fcanvas.width,fcanvas.height);
  fctx.translate(alpha.x+25 , alpha.y+25)
  fctx.drawImage(
    alphaImage,
    -100,
    -100,
    200,
    200
  )
}

function drawEnemy1(){
  let ctx = canvas.getContext('2d');
  
}