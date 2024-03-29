import {game} from '../earthan/logistics'
import greenURL from '/jacksoon/solder.png';

//import {greenImage} from '/brain/testfile.ts'
import { eCanvas, ectx } from '../earthan/canvas'

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
  y: 160,
  s: 100,
  offset: 0,
  image: greenImage,
};



export function greenAnimation(){
  if (game.state == 2){
  green.offset = (green.offset + 256) % (256 * 4);
  }
}

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
  if(game.state == 2){
    requestAnimationFrame(animategreen)
  }

}




export function updategreen(elapsed: number) {
  green.x += 100 * elapsed / 1000
  if (green.x > 1000) {
    green.x = 0;
    green.y = Math.random() * (650 - 128)
  }

}
