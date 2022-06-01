import {green} from '/brain/enemay'
import {makeBullet} from './bullets'

export function greenShoot(){
   let shoot = Math.random()*200
  if(shoot <= 1){
    makeBullet()
  }
  requestAnimationFrame(greenShoot)
}
greenShoot()
  