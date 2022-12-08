import {game} from './logistics'
import {app} from "./canvas"
import {damage} from './bullets'
import {uiCanvas, uictx} from './canvas'
import woodUrl from '/earthan/wood.png'

export let player = {
  money : 0,
  health : 1,
  damage : 1,
  score: 0,
  scoreStage: 0,
  maxScoreStage: 60,
  scoreIncrement: 1
}

export let dmg = {
  moneyNeeded : 1000,
  button: document.querySelector("#dmg")
}

dmg.button.addEventListener("click", function(event){
  if (player.money >= dmg.moneyNeeded){
    player.damage += 0.25*player.damage
    player.money-=dmg.moneyNeeded
    dmg.moneyNeeded += 0.5*dmg.moneyNeeded
    dmg.moneyNeeded = Math.round(dmg.moneyNeeded)
    player.money = Math.round(player.money)
    
  }
})

let moneyCount = document.querySelector('#moneyCount')
let scoreText = document.querySelector('#score')
export function updateScores(){
  
  moneyCount.innerHTML = `Bart Bucks: ${player.money}`
  scoreText.innerHTML=`Total Score: ${player.score}`
  dmg.button.innerHTML = `Upgrade Damage for ${dmg.moneyNeeded} Bart Bucks`
  player.scoreStage += player.scoreIncrement
  if(player.scoreStage == player.maxScoreStage){
    player.score += 1
    player.scoreStage = 0
  }
  if (game.state == 2){
  requestAnimationFrame(updateScores)
  }
  
}
