export let app = document.querySelector('#app');

export let pCanvas = document.createElement('canvas');
export let bgCanvas = document.createElement('canvas');
export let eCanvas = document.createElement('canvas')
export let jugCanvas = document.createElement('canvas')
export let bCanvas = document.createElement('canvas')
export let uiCanvas = document.createElement('canvas')
export let dreCanvas = document.createElement('canvas')

app.appendChild(bgCanvas);
app.appendChild(pCanvas);
app.appendChild(eCanvas)
app.appendChild(jugCanvas);
app.appendChild(bCanvas);
app.appendChild(uiCanvas);
app.appendChild(dreCanvas);

export function setupCanvas(canvas:HTMLCanvasElement){
canvas.width = 1500;
canvas.height = 650;

canvas.style.width = '1500px';
canvas.style.height = '650px';
// Add a border to the canvas
canvas.style.borderWidth = '3px';
canvas.style.borderColor = 'Black';
canvas.style.borderStyle = 'solid';
canvas.style.position = "absolute";
canvas.style.left = '5px'
canvas.style.top = '60px'
}

setupCanvas(bgCanvas)
export let bgctx = bgCanvas.getContext('2d')
export let pctx = pCanvas.getContext('2d')
export let bctx = bCanvas.getContext('2d')
export let uictx = uiCanvas.getContext('2d')
export let ectx = eCanvas.getContext('2d')
export let jugctx = jugCanvas.getContext('2d')
export let drectx = dreCanvas.getContext('2d')

pCanvas.style.width = '375px'
pCanvas.style.height = '650px'
pCanvas.height = 650
pCanvas.width = 375
pCanvas.style.borderWidth = '3px';
pCanvas.style.borderColor = 'Black';
pCanvas.style.borderStyle = 'solid';
pCanvas.style.position = 'absolute'
pCanvas.style.left = '1130px'
pCanvas.style.top = '60px'
setupCanvas(eCanvas)
setupCanvas(bCanvas)
setupCanvas(uiCanvas)
setupCanvas(jugCanvas)
setupCanvas(dreCanvas)

