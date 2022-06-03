import {uiCanvas, uictx} from "./canvas"


function drawLoad(){
  
}

function drawStart(){
  
}










export let game = {
  loading : true,
  state : 1, //game states: 1 means it hasn't started, 2 is mid-game, and 3 is post-game
  loads: 6, // loads = 
  
}

function updateGame(){
  if (game.loading = true){
    drawLoad()
  } else
    if(game.state == 1){
      drawStart()
    }
}