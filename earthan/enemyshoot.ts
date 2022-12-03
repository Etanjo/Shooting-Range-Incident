import {green} from '/brain/enemay'
import {makeBullet} from './bullets'
import {jug} from '../anrrew/jugger'
import {game} from './logistics'

export function greenShoot(){
   let shoot = Math.random()*600
  if(shoot <= 1){
    makeBullet(green.x, green.y)
  }
  if(game.state == 2){
  requestAnimationFrame(greenShoot)
  }
}


export function jugShoot(){
  let shoot = Math.random()*150
  if(shoot<=1){
    makeBullet(jug.x,jug.y)
  }
  if(game.state == 2){
  requestAnimationFrame(jugShoot)
  }
}

  