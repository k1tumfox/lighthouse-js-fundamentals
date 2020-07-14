//a container can only hold 100 units
/*
howManyHundreds(1000);	10
howManyHundreds(894);	   8
howManyHundreds(520);	   5
howManyHundreds(99);    0
howManyHundreds(0);	    0
*/

function howManyHundreds(num) {
  
  return (num-(num%100))/100;
}
console.log(howManyHundreds(1000));
/*
console.log(howManyHundreds(1000)); //, "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
*/