import {bullets, lasers} from '../earthan/bullets';
import {green} from '../brain/enemay';
import {jug} from './jugger';
import {player} from '../earthan/shop'
import {alpha} from './movement'
import {game, endGame, drawShotEndScreen} from '../earthan/logistics'

export function greenkill (laser) {
  let distance = Math.sqrt(
    (laser.x-green.x)*(laser.x-green.x)
    +
    (laser.y-green.y)*(laser.y-green.y)
  );
  if(distance <=75)
  {let kill = Math.random()*2
   if(kill<=player.damage){
    green.x= 0
   green.y = Math.random()*(650-128)
   player.money += 10
   player.score+=10
  }
  lasers.splice(laser,1)
  
  }
};

export function jugkill (laser) {
  let distance = Math.sqrt(
    (laser.x-jug.x)*(laser.x-jug.x)
    +
    (laser.y-jug.y)*(laser.y-jug.y)
  )
  if(distance <=75)
  {let kill = Math.random()*3
   if(kill<=player.damage){
    jug.x= 0
   jug.y = Math.random()*(650-128)
   player.money += 25
   player.score +=25
   }
  lasers.splice(laser,1)
   
  }
};

console.log(player.lives)

export function playerKill(bullet){
  
  if(bullet.x - 1125 > alpha.x && bullet.y+5 > alpha.y && bullet.x - 1125 < alpha.x+130 && bullet.y+5 < alpha.y+130){
    bullets.splice(bullet, 1)
   player.lives -= 1
   console.log(player.lives)
   if(player.lives == 0){
    game.state = 3
    setTimeout(endGame, 120)
    drawShotEndScreen()}
  }
}