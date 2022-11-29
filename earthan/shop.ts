import {app} from "./canvas"
import {damage} from './bullets'
import {uiCanvas, uictx} from './canvas'
import {game} from './logistics'
import woodUrl from '/earthan/wood.png'

export let player = {
  money : 0,
  health : 1,
  damage : 1,
}
let dmg = {
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
export function updateScores(){
  
  moneyCount.innerText = `Bart Bucks: ${player.money}`
  dmg.button.innerText = `Upgrade Damage for ${dmg.moneyNeeded} Bart Bucks`
  if (game.state == 2){
  requestAnimationFrame(updateScores)
  }
}
updateScores()