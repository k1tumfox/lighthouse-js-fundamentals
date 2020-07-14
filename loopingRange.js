//function that creates arrays with param of start, end, step
//function should return an empty array [] if given incorrect params
/* - params undefined
- start > end
- step <= 0 */
//may use .push()

/* function range(start, end, step) {
  let theArray = [];
  if (start === undefined || end === undefined || step === undefined) {
    break;
  } else if (start > end) {
    break;
  } else if (step <= 0) {
    break;
  } else {
    for (let i = start; i <= end; i += step) {
      theArray.push(i);
    }
  }
  return theArray;
} */

function range(start, end, step) {
  let theArray = [];
  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0)) {
    return theArray;
  } else {
    for (let i = start; i <= end; i += step) {
      theArray.push(i);
    }
  }
  return theArray;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));