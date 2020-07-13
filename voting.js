
//takes in an array of possible voting stations, and then only returns the 
//names of the stations that are appropriate

/*
- each station is an array with a name, capacity, and venu type
- approprite, capacity = 20, === 'school' || 'community centre'
- init new array within our function (let goodStations = []) and 
push the stations that meet the requirements to it as we loop through them
*/

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
];


function chooseStations(stations) {
  let approved = [];
  for (const station of stations) {
    const name = station[0];
    const capacity = station[1];
    const venu = station[2];
    
    if (capacity >= 20 && (venu === 'school' || venu === 'community centre')) {
      approved.push(name);
    }

  }
  return approved;
}

console.log(chooseStations(stations));

/*should return:
['Bright Lights Elementary', 'Moose Mountain Community Centre']

*/

