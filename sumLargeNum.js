

//receives an array of numbers and returns the sum of the 2 largest numbers
const sumLargestNumbers = function(data) {
  let firstLarge = 0;
  let secondLarge = 0;
  let sum;
  for (let bit of data) {
    if (bit > firstLarge && bit > secondLarge) {
      secondLarge = firstLarge;
      firstLarge = bit;
      
    } else if (bit < firstLarge && bit > secondLarge) {
      secondLarge = bit;
    } 
  }
  return sum = firstLarge + secondLarge; 
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


