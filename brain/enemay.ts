/*
import greenImage from '/jacksoon/Green.png';
import bganvas from '/earthan/canvas.ts'

function drawgreen() {
  let pctx = bganvas.getContext('2d');
  pctx.resetTransform();
  pctx.clearRect(0, 0, bganvas.width, bganvas.height);
  pctx.translate(green.x + 25, green.y + 25)
  pctx.drawImage(
    greenImage,
    -100,
    -100,
    200,
    200
  )
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

function drawgreenImage() {
  let ctx = green.getContext('2d');
  ctx.resetTransform();
  ctx.clearRect(0, 0, bganvas.width, bganvas.height);
  ctx.translate(green.x + 25, green.y + 25)
  ctx.drawImage(green.image,
    -50,
    -30.95,
    100,
    60,
  );

  greenImage.addEventListener(
    "load",
    function() { animategreen() }
  );
}



function updategreen(elapsed: number) {
green.x += 100 * elapsed/1000 
  
  if (green.x > bganvas.width) {
    green.x = 0;
  }
}
*/