/*
function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);
*/


/*
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}


var laugh = function(lols) {
  laughter = "";
  for (let i = 1; i <= lols; i++) {
    laughter += "ha";
  }
  laughter += "!";
  return laughter;
}

emotions("happy", laugh(2));
*/

/*
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function(num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0 ; i < num ; i++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
});
*/

var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));

