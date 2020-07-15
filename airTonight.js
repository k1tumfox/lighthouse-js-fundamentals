//return polluted if checker >= threshold, otherwise "Clean"

const checkAir = function (samples, threshold) {
  let cleanCount = 0;
  let dirtCount = 0;
  let pollution = 0;
  for (let pack of samples) {
    if (pack === 'clean') {
      cleanCount++;
    } else if (pack === 'dirty') {
      dirtCount++;
    } else {
      console.log('invalid sample');
    }
  }
  pollution = dirtCount / samples.length;
  return pollution >= threshold ? 'Polluted' : 'Clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


