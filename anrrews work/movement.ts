import alphaUrl from '/jacksoon/alpha.png';

let assetDiv : HTMLDivElement = document.querySelector('#assets');

export let alphaImage = document.createElement('img');
alphaImage.src = alphaUrl;
assetDiv.appendChild(alphaImage);

//assetDiv.style.display = 'none';



export let alpha = {
  x: 100,
  y: 100,
  s: 100,
  image: alphaImage,
};

function drawalpha () {
  let pctx = pcanvas.getContext('2d');
  pctx.resetTransform();
  pctx.clearRect(0,0,pcanvas.width,pcanvas.height);
  pctx.translate(alpha.x+25 , alpha.y+25)
  pctx.drawImage(
    alphaImage,
    -100,
    -100,
    200,
    200
  )
}

window.addEventListener(
  'keydown',
  function (event) {
    console.log(event.key,'pressed');
    if (event.key == 'ArrowDown' || event.key=='s') {
      alpha.y += 20;
    }
    if (event.key == 'ArrowUp' || event.key=='w') {
      alpha.y -= 20;
    }
  }
)

let div = document.querySelector("div");

let frame = 0;

let nframes = 22;
let size = 32;
function showNextFrame(){
  frame = (frame +1)% nframes;
  let offset = frame * size
  div.style.backgroundPosition = `-${offset}px`;
}

setInterval(
  showNextFrame,
  1000/6
);