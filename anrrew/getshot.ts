import {lasers} from '/earthan/bullets.ts';
import {green} from '/brain/enemay.ts';

export function laserkill (laser) {
  let distance = Math.sqrt(
    (laser.x-green.y)*(laser.x-green.y)
    +
    (laser.y-green.y)*(laser.y-green.y)
  );
  console.log(distance);
  if(distance <=50)
  {green.x= Math.random()*1000}
}

laserkill();