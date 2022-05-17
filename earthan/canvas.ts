export let app = document.querySelector('#app');

export let playerCanvas = document.createElement('canvas');
export let bgCanvas = document.createElement('canvas');

app.appendChild(bgCanvas);
app.appendChild(playerCanvas);

export function setupCanvas(canvas:HTMLCanvasElement){
canvas.width = 1000;
canvas.height = 700;

canvas.style.width = '1500px';
canvas.style.height = '650px';
// Add a border to the canvas
canvas.style.borderWidth = '3px';
canvas.style.borderColor = 'Black';
canvas.style.borderStyle = 'solid';
}

setupCanvas(bgCanvas)
export let bgctx = bgCanvas.getContext('2d')