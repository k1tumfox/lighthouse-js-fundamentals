//vowel count in string, aeiou

const numberOfVowels = function(data) {
  let count = 0;
  for (d of data) {
    switch (d) {
      case 'a':
        count++;
        break;
      case 'e':
        count++;
        break;
      case 'i':
        count++;
        break;
      case 'o':
        count++;
        break;
      case 'u':
        count++;
        break;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));




