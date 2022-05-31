/*
import jugURl from '/jacksoon/juggernaut.png'
import { eCanvas, ectx } from '/earthan/canvas.ts' 


let assetDiv: HTMLDivElement = document.querySelector('#assets');

assetDiv.style.display = 'none'; // hide the images


export let jugImage = document.createElement('img');
jugImage.src = jugURl;
assetDiv.appendChild(jugImage);


function drawjugImage() {
  let ectx = eCanvas.getContext('2d');
  ectx.resetTransform();
  ectx.clearRect(0, 0, eCanvas.width, eCanvas.height);
  //ectx.translate(green.x + 25, green.y + 25)
  /*ectx.drawImage(green.image,
    -100,
    -100,
    200,
    200
  );
  ectx.drawImage(
      juggernaut.image,  // image to draw
      // offset is equal to 0
      juggernaut.offset, 0,  // source offset
      64, 64,  // source size
      juggernaut.x, juggernaut.y, // destination offset
      128, 128 // destination size
      );    
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