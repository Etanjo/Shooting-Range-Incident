export let app = document.querySelector('#app');

export let pCanvas = document.createElement('canvas');
export let bgCanvas = document.createElement('canvas');
export let bCanvas = document.createElement('canvas')
export let uiCanvas = document.createElement('canvas')

app.appendChild(bgCanvas);
app.appendChild(pCanvas);
app.appendChild(bCanvas);
app.appendChild(uiCanvas);

export function setupCanvas(canvas:HTMLCanvasElement){
canvas.width = 1500;
canvas.height = 650;

canvas.style.width = '1500px';
canvas.style.height = '650px';
// Add a border to the canvas
canvas.style.borderWidth = '3px';
canvas.style.borderColor = 'Black';
canvas.style.borderStyle = 'solid';
}

setupCanvas(bgCanvas)
export let bgctx = bgCanvas.getContext('2d')
export let pctx = pCanvas.getContext('2d')
export let bctx = bCanvas.getContext('2d')
pCanvas.style.width = '375px'
pCanvas.style.height = '650px'
pCanvas.height = 650
pCanvas.width = 375
pCanvas.style.borderWidth = '3px';
pCanvas.style.borderColor = 'Black';
pCanvas.style.borderStyle = 'solid';
pCanvas.style.position = 'absolute'
pCanvas.style.right = '5px'
pCanvas.style.top = '60px'
pCanvas.style.backgroundColor = 'Yellow'
setupCanvas(bCanvas)
bCanvas.style.position = "absolute"
bCanvas.style.right = '5px'
bCanvas.style.top = '60px'
setupCanvas(uiCanvas)
uiCanvas.style.position = "absolute"
uiCanvas.style.right = '5px'
uiCanvas.style.top = '60px'