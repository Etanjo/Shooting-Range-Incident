import {lasers} from '/earthan/bullets.ts';
import {green} from '/brain/enemay.ts';

export function laserkill (laser) {
  let distance = Math.sqrt(
    (laser.x-green.x)*(laser.x-green.x)
    +
    (laser.y-green.y)*(laser.y-green.y)
  );
  console.log(distance);
  if(distance <=75)
  {let kill = Math.random()*1.5
   if(kill<=1){
    green.x= 0
   green.y = Math.random()*(650-128)}
  lasers.splice(laser,1)
  }
};