import jugURl from '/jacksoon/juggernaut.png'
import { jugCanvas, jugCtx } from '/earthan/canvas.ts' 
import phantogusUrl from '/annrew/alphatm.png'

let assetDiv: HTMLDivElement = document.querySelector('#assets');

//assetDiv.style.display = 'none'; // hide the images


//export let jugImage = document.createElement('img');
//jugImage.src = jugURl;
//assetDiv.appendChild(jugImage);

export let jugImage = document.createElement('img');
jugImage.src = phantogusUrl;
assetDiv.appendChild(jugImage);

export let jug = {
  x: 100,
  y: 100,
  s: 100,
  offset : 0,
  image: jugImage,
};

function drawjug () {
  jugctx.resetTransform();
  jugctx.clearRect(0,0,jugCanvas.width,jugCanvas.height);
  jugctx.drawImage(
    jugImage,
    jug.x,
    jug.y,
    256,
    256
  )
}


let startTime = null;

function animatejug(timestamp: number = 0) {
  let elapsed;
  if (timestamp) {
    if (!startTime) {
      startTime = timestamp;
      elapsed = 0;
    } else {
      elapsed = timestamp - startTime
      startTime = timestamp;
    }
    updatejug(elapsed);
  }
  drawjug();
  requestAnimationFrame(animatejug)
}

function updatejug(elapsed: number) {
  jug.x += 1000 * elapsed / 1000
  if (jug.x > 1000) {
    jug.x = 0;
  }
  
}

jugImage.addEventListener(
  "load",
  function() { animatejug() }
);
