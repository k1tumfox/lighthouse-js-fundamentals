

//
function lastIndexOf(array, value) {
  let index;
  let valueCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      valueCount++;
    }
  }

  if (valueCount === 0) {
    return -1;
  }
  return index; //of the last time the value occurs in the array
  
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
