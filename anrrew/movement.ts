
//import alphaUrl from '/jacksoon/alpha.png';

import alphaUrl from '/anrrew/alphatm.png'
  
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

import {pCanvas} from '/earthan/canvas.ts'

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
    alpha.x,
    alpha.y,
    200,
    200
  )
}

function updatealpha (elapsed : number) {
  alpha.y += 1200 * elapsed/1000;
  if (alpha.y < 0){
    alpha.y = 325;
  }
  if (alpha.x < 0){
    alpha.x = 250;
  }
  if (alpha.x >250){
    alpha.x = 0;
  }
}

function animatealpha (timestamp : number = 0) {
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
    updatealpha(elapsed);
  }
  drawalpha();
  requestAnimationFrame(animatealpha)
};

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
animatealpha()

/*
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
*/