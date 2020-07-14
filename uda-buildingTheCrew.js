/* var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];

console.log(crew); */


/* var donuts = ["glazed", "chocolate frosted", 
"Boston creme", "glazed cruller", 
"cinnamon sugar", "sprinkled"];

console.log(donuts.push("snow sugar")); */


/* var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(-2, 1, 'Yellow', 'Green');
console.log(rainbow);
rainbow.splice(4, 0, 'Purple');
console.log(rainbow); */


/* function hasEnoughPlayers(house) {
  return house.length === 7;
}
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team)); */


var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

  // here, donutBox[row].length refers to the length of the donut array 
  //currently being looped over
for (var row = 0; row < donutBox.length; row++) {
  //console.log(donutBox[row]);
  /* Prints:
  ["glazed", "chocolate glazed", "cinnamon"]
  ["powdered", "sprinkled", "glazed cruller"]
  ["chocolate cruller", "Boston creme", "creme de leche"] */
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}























