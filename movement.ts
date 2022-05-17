//fcanvas and fctx will be replaced by ethan's canvas names

function drawfallingguy () {
  let fctx = fcanvas.getContext('2d');
  fctx.resetTransform();
  fctx.clearRect(0,0,fcanvas.width,fcanvas.height);
  fctx.translate(alpha.x+25 , alpha.y+25)
  fctx.drawImage(
    alphaImage,
    -100,
    -100,
    200,
    200
  )
}