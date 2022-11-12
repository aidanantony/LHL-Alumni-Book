const numberOfVowels = function(data) {
  vowelNumber = 0;
  for (letter of data) {
    if (letter === 'a') {
      vowelNumber += 1;
    } else if (letter === 'e') {
      vowelNumber += 1;
    } else if (letter === 'i') {
      vowelNumber += 1;
    } else if (letter === 'o') {
      vowelNumber += 1;
    } else if (letter === 'u') {
      vowelNumber += 1;
    }
  }
  return vowelNumber;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));