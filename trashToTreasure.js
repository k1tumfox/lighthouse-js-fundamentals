

function smartGarbage(trash, bins) { //bin object has 3 keys, each holding number value: waste, recycling, compost
  let updatedBins = {};
  let keys = Object.keys(bins);      //references bin object's keys
  let values = Object.values(bins);  //references bin object's value
  for (let index = 0; index < keys.length; index++) {
    if (keys[index] === trash) {   //when trash param, which is 'recycling' arg passed from call below, 
      values[index] += 1;        //matches bin object's key, then value at that key's index is incr by 1.
    }
  }
  keys.forEach((key, value) => updatedBins[key] = values[value]);
  return updatedBins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
//should output

/* {
  waste: 4,
  recycling: 3,
  compost: 5
} */


