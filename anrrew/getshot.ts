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
  {green.x= 0
  lasers.splice(laser,1)
  }
};