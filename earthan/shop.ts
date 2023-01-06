import {game} from './logistics'
import {app} from "./canvas"
import {damage} from './bullets'
import {uiCanvas, uictx} from './canvas'
import woodUrl from '/earthan/wood.png'

export let player = {
  money : 0,
  lives : 1,
  damage : 1,
  passiveIncome: 0,
  movementSpeed: 20 ,
  score: 0,
  lastScore: 0,
  scoreStage: 0,
  maxScoreStage: 60,
  scoreIncrement: 1
}

export let dmg = {
  moneyNeeded : 500,
  button: document.querySelector("#dmg")
}

export let speed = {
  moneyNeeded : 50,
  button: document.querySelector('#speed')
}

export let health = {
  moneyNeeded : 1500,
  button: document.querySelector('#hp')
}

export let income = {
  moneyNeeded : 250,
  button: document.querySelector('#income')
}

income.button.addEventListener("click", function(event){
  if(player.money >= income.moneyNeeded){
    player.passiveIncome +=1
    player.money -= income.moneyNeeded
    income.moneyNeeded +=100
    income.button.innerHTML = `Upgrade passive income for ${income.moneyNeeded} Bart Bucks`
  }
})

health.button?.addEventListener("click", function(event){
  if(player.money >= health.moneyNeeded){
    player.lives += 1
    player.money -= health.moneyNeeded
  }
})

speed.button?.addEventListener("click",function(event){
  if (player.money >= speed.moneyNeeded){
    player.movementSpeed += 5
    player.money-=speed.moneyNeeded
    speed.moneyNeeded += 10
    
  }
})

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
  speed.button.innerHTML = `Upgrade Speed for ${speed.moneyNeeded} Bart Bucks`
  player.scoreStage += player.scoreIncrement
  if(player.scoreStage == player.maxScoreStage){
    player.score += 1
    player.money += player.passiveIncome
    player.scoreStage = 0
  }
  if (game.state == 2){
  requestAnimationFrame(updateScores)
  }
  
}
