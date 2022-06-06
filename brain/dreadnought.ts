import dreURl from '/jacksoon/Dreadnought.png'
import { dreCanvas, drectx } from '/earthan/canvas.ts'


let assetDiv: HTMLDivElement = document.querySelector('#assets');

//assetDiv.style.display = 'none'; // hide the images


export let dreImage = document.createElement('img');
dreImage.src = dreURl;
assetDiv.appendChild(dreImage);


export let Dreadnought = {
  x: 100,
  y: 100,
  s: 100,
  offset: 0,
  image: dreImage,
};

function drawdre() {
  drectx.resetTransform();
  drectx.clearRect(0, 0, dreCanvas.width, dreCanvas.height);
  drectx.drawImage(
    Dreadnought.image,  // image to draw
    // offset is equal to 0
    Dreadnought.offset, 0,  // source offset
    256, 256,  // source size
    Dreadnought.x, Dreadnought.y, // destination offset
    128, 128 // destination size
  );
}


let startTime = null;

function animatedre(timestamp: number = 0) {
  let elapsed;
  if (timestamp) {
    if (!startTime) {
      startTime = timestamp;
      elapsed = 0;
    } else {
      elapsed = timestamp - startTime
      startTime = timestamp;
    }
    updatedre(elapsed);

  }
  drawdre();
  requestAnimationFrame(animatedre)
}

setInterval(
  function() {
    // rotate between 0, 64, 128, 196, etc
    Dreadnought.offset = (Dreadnought.offset + 256) % (256 * 200);
  },
  45// ms
)


function updatedre(elapsed: number) {
  Dreadnought.x += 100 * elapsed / 1000
  if (Dreadnought.x > 1000) {
    Dreadnought.x = 0;
  }
    setInterval(function() {Dreadnought.x += -50 * elapsed / 3000}, 6000) 
setInterval(function() {Dreadnought.x += 70 * elapsed / 3000}, 8000) 
}





dreImage.addEventListener(
  "load",
  function() { animatedre() }
);
