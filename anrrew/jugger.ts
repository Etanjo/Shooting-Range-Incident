import jugURl from '/jacksoon/Juggernaut.png'
import { jugCanvas, jugctx } from '/earthan/canvas.ts'
import phantogusUrl from '/anrrew/alphatm.png'

let assetDiv: HTMLDivElement = document.querySelector('#assets');

//assetDiv.style.display = 'none'; // hide the images


export let jugImage = document.createElement('img');
jugImage.src = jugURl;
assetDiv.appendChild(jugImage);


export let jug = {
  x: 100,
  y: 100,
  s: 100,
  offset: 0,
  image: jugImage,
};

function drawjug() {
  jugctx.resetTransform();
  jugctx.clearRect(0, 0, jugCanvas.width, jugCanvas.height);
  jugctx.drawImage(
    jug.image,  // image to draw
    // offset is equal to 0
    jug.offset, 0,  // source offset
    256, 256,  // source size
    jug.x, jug.y, // destination offset
    128, 128 // destination size
  );
}


let startTime = null;

export function animatejug(timestamp: number = 0) {
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

export function jugAnimation(){
  jug.offset = (jug.offset + 256) % (256 * 200);
}




export function updatejug(elapsed: number) {
  if (jug.offset < 200 * 191) {
    jug.x += 20 * elapsed / 1000
  }
  if (jug.x > 1000) {
    jug.x = 0;
  }
   // setInterval(function() {jug.x += -60 * elapsed / 3000}, 6000) 
//setInterval(function() {jug.x += 80 * elapsed / 3000}, 8000) 
}

function jugshooting () {
  jug.offset = 191 
}

function jugmoving () {
  jug.offset = 191 
}

