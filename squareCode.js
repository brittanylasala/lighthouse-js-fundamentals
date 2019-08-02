const squareCode = function(message) {
  let noSpace = '';
  let newString = '';
  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
    } else {
      noSpace += message[i];
    }
  }
  numOfBlocks = Math.ceil(Math.sqrt(noSpace.length));
  for (let j = 0; j < numOfBlocks; j++) {
    if (newString !== '') {
      newString += ' ';
    }
    for (k = 0; k < (noSpace.length - j); k += numOfBlocks) {
      newString += noSpace[j+k];
    }
  }
  return newString;
};

console.log(squareCode("chillout"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));