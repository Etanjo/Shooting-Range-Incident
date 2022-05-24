/*
import greenImage from '/jacksoon/Green.png';
//import {greenImage} from '/brain/testfile.ts'
import {eCanvas} from '/earthan/canvas.ts'



function drawgreenImage() {
  let ectx = eCanvas.getContext('2d');
  ectx.resetTransform();
  ectx.clearRect(0, 0, eCanvas.width, eCanvas.height);
  ectx.translate(green.x + 25, green.y + 25)
  ectx.drawImage( green.image,
    -100,
    -100,
    200,
    200
  );
  
}




export let green = {
  x: 100,
  y: 100,
  s: 100,
  image: greenImage,
};

let startTime = null;

function animategreen(timestamp: number = 0) {
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

drawgreenImage.addEventListener(
  "load",
function () {animategreen()}
);


function updategreen(elapsed: number) {
green.x += 100 * elapsed/1000 
  
  if (green.x > eCanvas.width) {
    green.x = 0;
  }
}
*/