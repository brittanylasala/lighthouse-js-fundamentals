const numberOfVowels = function(data) {
  numOfVowels = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      numOfVowels += 1;
    }
  }
  return numOfVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));