const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition(dir) {
  let location = [0, 0];
  for (let spot of dir) {
    switch (spot) {
    case 'north':
      location[1] += 1;
      break;
    case 'south':
      location[1] -= 1;
      break;
    case 'east':
      location[0] += 1;
      break;    
    case 'west':
      location[0] -= 1;
      break;
    }
  }
  return location;
}

console.log(finalPosition(moves));

//finalPosition should return the array, [-1, 4]