
import greenURL from '/jacksoon/solder.png';

//import {greenImage} from '/brain/testfile.ts'
import { eCanvas, ectx } from '/earthan/canvas.ts'

let assetDiv: HTMLDivElement = document.querySelector('#assets');

assetDiv.style.display = 'none'; // hide the images

export let greenImage = document.createElement('img');
greenImage.src = greenURL;
assetDiv.appendChild(greenImage);


function drawgreenImage() {
  let ectx = eCanvas.getContext('2d');
  ectx.resetTransform();
  ectx.clearRect(0, 0, eCanvas.width, eCanvas.height);
  //ectx.translate(green.x + 25, green.y + 25)
  /*ectx.drawImage(green.image,
    -100,
    -100,
    200,
    200
  );*/
  ectx.drawImage(
    green.image,  // image to draw
    // offset is equal to 0
    green.offset, 0,  // source offset
    256, 256,  // source size
    green.x, green.y, // destination offset
    128, 128 // destination size
  );
}




export let green = {

  x: 100,
  y: 100,
  s: 100,
  offset: 0,
  image: greenImage,
};

setInterval(
  function() {
    // rotate between 0, 64, 128, 196, etc
    green.offset = (green.offset + 256) % (256 * 4);
  },
  180 // ms
)

let startTime = null;

export function animategreen(timestamp: number = 0) {
  let elapsed;
  if (timestamp) {
    if (!startTime) {
      startTime = timestamp;
      elapsed = 0;
    } else {
      elapsed = timestamp - startTime
      startTime = timestamp;
    }
    updategreen(elapsed);
  }
  drawgreenImage();
  
  requestAnimationFrame(animategreen)
}

greenImage.addEventListener(
  "load",
  function() { animategreen() }
);


export function updategreen(elapsed: number) {
  green.x += 100 * elapsed / 1000
  if (green.x > 1000) {
    green.x = 0;
    green.y = Math.random() * (650 - 128)
  }

}


/*
function let () {

}
/*
function animateCanvas() {

}




let div = document.querySelector('#sprite');

let frame = 0;
let nframes = 8;
let size = 64;

function showNextFrame() {
  frame = (frame + 1) % nframes;
  let offset = frame * size;
  div.style.backgroundPosition = `-${offset}px`;
}

setInterval(
  showNextFrame,
  1000 / 12
)
*/