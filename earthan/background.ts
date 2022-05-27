import {bgCanvas} from "./canvas"

bgCanvas.style.backgroundImage = 'url("/earthan/range.png")'
bgCanvas.style.backgroundPositionY = '0px'


let bgframe = 0; // current frame
let bgnframes = 48; // number of frames
let bgsize = 650; // size of each frame



function showNextFrame () {
  bgframe = (bgframe + 1) % bgnframes; // add one, loop back to zero
  let offset = bgframe * bgsize;
  bgCanvas.style.backgroundPositionY = `-${offset}px`;
}

setInterval( // run forever on a timer
  showNextFrame,
  1000 / 12 // 12 times per second
)