/*
import jugURl from '/jacksoon/juggernaut.png'
import { jugCanvas, jugCtx } from '/earthan/canvas.ts' 


let assetDiv: HTMLDivElement = document.querySelector('#assets');

assetDiv.style.display = 'none'; // hide the images


export let jugImage = document.createElement('img');
jugImage.src = jugURl;
assetDiv.appendChild(jugImage);

export let juggernaut = {
  x: 100,
  y: 100,
  s: 100,
  offset : 0,
  image: jugImage,
};

function drawjug () {
  let jugctx = pCanvas.getContext('2d');
  jugctx.resetTransform();
  jugctx.clearRect(0,0,pCanvas.width,pCanvas.height);
  jugctx.drawImage(
    jugImage,
    jug.x,
    jug.y,
    150,
    150
  )
}




export let juggernaut = {
  x: 100,
  y: 100,
  s: 100,
  offset : 0,
  image: jugImage,
};

setInterval(
  function () {
    // rotate between 0, 64, 128, 196, etc
    jugImage.offset = (jugImage.offset + 64) % (64*4);
  },
  180 // ms
)

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
  drawjugImage();
  requestAnimationFrame(animatejug)
}

jugImage.addEventListener(
  "load",
  function() { animatejug() }
);


function updatejug(elapsed: number) {
  juggernaut.x += 100 * elapsed / 1000
  if (juggernaut.x > 1000) {
    juggernaut.x = 0;
  }
  
}
*/