export let app = document.querySelector('#app');

export let pCanvas = document.createElement('canvas');
export let bgCanvas = document.createElement('canvas');

app.appendChild(bgCanvas);
app.appendChild(pCanvas);

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
pCanvas.style.width = '375px'
pCanvas.style.height = '650px'
pCanvas.height = 650
pCanvas.width = 375
pCanvas.style.borderWidth = '3px';
pCanvas.style.borderColor = 'Black';
pCanvas.style.borderStyle = 'solid';