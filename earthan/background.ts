import {bgCanvas} from "./canvas"
import {range} from "./logistics"
import rangeUrl from "/earthan/range.png"
bgCanvas.style.backgroundImage = `url("${rangeUrl}")`
bgCanvas.style.backgroundPositionY = '0px'


let bgframe = 0; // current frame
let bgnframes = 48; // number of frames
let bgsize = 650; // size of each frame



export function showNextFrame () {
  bgframe = (bgframe + 1) % bgnframes; // add one, loop back to zero
  let offset = bgframe * bgsize;
  bgCanvas.style.backgroundPositionY = `-${offset}px`;
}

