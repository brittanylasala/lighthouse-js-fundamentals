const multiplicationTable = function(maxValue) {
  let line = '';
  for (let i = 1; i <= maxValue; i++) {
    if (line !== '') {
      line += '\n'
    }
    for (let j = 1; j <= maxValue; j++) {
      line += (i * j).toString() + ' ';
    }
  }
  return line;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));