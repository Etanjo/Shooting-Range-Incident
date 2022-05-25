
import alphaUrl from '/jacksoon/alpha.png';

let assetDiv : HTMLDivElement = document.querySelector('#assets');

export let alphaImage = document.createElement('img');
alphaImage.src = alphaUrl;
assetDiv.appendChild(alphaImage);

//assetDiv.style.display = 'none';

let startTime = null;
let elapsed : any

import bartenderUrl from '/anrrew/bartender.png'

export let bartenderImage = document.createElement('img');
bartenderImage.src = bartenderUrl;
assetDiv.appendChild(bartenderImage)

export let bartender = {
  x:100,
  y:100,
  s:100,
  image: bartenderImage
}

import {pCanvas} from '/earthan/canvas.ts'

function drawBartender () {
  let pctx = pCanvas.getContext('2d');
   pctx.resetTransform();
 pctx.clearRect(0,0,pCanvas.width,pCanvas.height);
  pctx.translate(bartender.x+25 , bartender.y+25)
  pctx.drawImage(
    bartenderImage,
    -100,
    -100,
    200,
    200
  )
}
function updatefallingguy (elapsed : number) {
  const fallSpeed = 10;
  bartender.y += 1200 * elapsed/1000;
  if (bartender.y > pCanvas.height +50 ){
    bartender.y = 0;
  }
  if (bartender.x < 0){
    bartender.x = pCanvas.width;
  }
  if (bartender.x >1000){
    bartender.x = 0;
  }
}

function animateBartender (timestamp : number = 0) {
  let elapsed
  if (timestamp){
    if (!startTime){
      startTime = timestamp;
      elapsed = 0;
    } else {
      elapsed = timestamp - startTime
      startTime = timestamp;
    }
    (elapsed);
   // updateBartender(elapsed);
  }
  drawBartender();
  requestAnimationFrame(animateBartender)
};

window.addEventListener(
  'keydown',
  function (event) {
    console.log(event.key,'pressed');
    if (event.key == 'ArrowDown' || event.key=='s') {
      bartender.y += 20;
    }
    if (event.key == 'ArrowUp' || event.key=='w') {
      bartender.y -= 20;
    }
  }
)

bartenderImage.addEventListener(
  "load",
  function () {drawBartender()}
)


export let alpha = {
  x: 100,
  y: 100,
  s: 100,
  image: alphaImage,
};

function drawalpha () {
  let pctx = pCanvas.getContext('2d');
  pctx.resetTransform();
  pctx.clearRect(0,0,pCanvas.width,pCanvas.height);
  pctx.translate(alpha.x+25 , alpha.y+25)
  pctx.drawImage(
    alphaImage,
    -100,
    -100,
    200,
    200
  )
}

window.addEventListener(
  'keydown',
  function (event) {
    console.log(event.key,'pressed');
    if (event.key == 'ArrowDown' || event.key=='s') {
      alpha.y += 20;
    }
    if (event.key == 'ArrowUp' || event.key=='w') {
      alpha.y -= 20;
    }
  }
)

let div = document.querySelector("div");

let frame = 0;

let nframes = 22;
let size = 32;
function showNextFrame(){
  frame = (frame +1)% nframes;
  let offset = frame * size
  div.style.backgroundPosition = `-${offset}px`;
}

setInterval(
  showNextFrame,
  1000/6
);