import {lasers} from '/earthan/bullets.ts';
import {green} from '/brain/enemay.ts';
import {jug} from '/anrrew/jugger.ts';

export function greenkill (laser) {
  let distance = Math.sqrt(
    (laser.x-green.x)*(laser.x-green.x)
    +
    (laser.y-green.y)*(laser.y-green.y)
  );
  console.log(distance);
  if(distance <=75)
  {let kill = Math.random()*2
   if(kill<=1){
    green.x= 0
   green.y = Math.random()*(650-128)}
  lasers.splice(laser,1)
  }
};

export function jugkill (laser) {
  let distance = Math.sqrt(
    (laser.x-jug.x)*(laser.x-jug.x)
    +
    (laser.y-jug.y)*(laser.y-jug.y)
  )
  console.log(distance);
  if(distance <=75)
  {let kill = Math.random()*3
   if(kill<=1){
    jug.x= 0
   jug.y = Math.random()*(650-128)}
  lasers.splice(laser,1)
  }
};