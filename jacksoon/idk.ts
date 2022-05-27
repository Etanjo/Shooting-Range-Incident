/*

                ||
code goes here  ||
                \/
*/

/*
import JuggernautURL from '/jacksoon/Juggernaut.png';
//import {greenImage} from '/brain/testfile.ts'
import {eCanvas} from '/earthan/canvas.ts'

let assetDiv : HTMLDivElement = document.querySelector('#assets');

assetDiv.style.display = 'none'; // hide the images

export let JuggernautImage = document.createElement('img');
JuggernautImage.src = JuggernautURL;
assetDiv.appendChild(JuggernautImage);


function drawJuggernautImage() {
  let ectx = eCanvas.getContext('2d');
  ectx.resetTransform();
  ectx.clearRect(0, 0, eCanvas.width, eCanvas.height);
  ectx.translate(Juggernaut.x + 25, Juggernaut.y + 25)
  ectx.drawImage( Juggernaut.image,
    -100,
    -100,
    200,
    200
  );
  
}




export let Juggernaut = {
  x: 100,
  y: 100,
  s: 100,
  image: JuggernautImage,
};

let startTime = null;

function animateJuggernaut(timestamp: number = 0) {
  let elapsed;
  if (timestamp) {
    if (!startTime) {
      startTime = timestamp;
      elapsed = 0;
    } else {
      elapsed = timestamp - startTime
      startTime = timestamp;
    }
    updateJuggernaut(elapsed);
  }
  drawJuggernautImage();
  requestAnimationFrame(animateJuggernaut)
}

JuggernautImage.addEventListener(
  "load",
function () {animateJuggernaut()}
);


function updateJuggernaut(elapsed: number) {
Juggernaut.x += 100 * elapsed/1000 
  
  if (Juggernaut.x > 1000) {
    Juggernaut.x = 0;
  }
}

*/