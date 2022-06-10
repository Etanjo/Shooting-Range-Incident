import {green} from '/brain/enemay'
import {makeBullet} from './bullets'
import {jug} from '/anrrew/jugger'

export function greenShoot(){
   let shoot = Math.random()*275
  if(shoot <= 1){
    makeBullet(green.x, green.y)
  }
  requestAnimationFrame(greenShoot)
}
greenShoot()

export function jugShoot(){
  let shoot = Math.random()*150
  if(shoot<=1){
    makeBullet(jug.x,jug.y)
  }
  requestAnimationFrame(jugShoot)
}
jugShoot()
  