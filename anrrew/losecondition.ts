import {uictx, uicanvas} from '/earthan/canvas.ts'
import {jug} from '/anrrew/jugger.ts'
import {green} from '/brain/enemay.ts'
import {game} from '/earthan/logistics.ts'

function drawSquare (x,y){
    if(green.x=500)
  uictx.beginPath();
  uictx.moveTo(x,y);
  uictx.lineTo(x+10000,y);
  uictx.lineTo(x+10000,y+10000);
  uictx.lineTo(x,y+10000)
  uictx.lineTo(x,y);
  uictx.strokeStyle = "#4A412A";
  uictx.lineWidth = 1000000
  uictx.stroke();
}

drawSquare;