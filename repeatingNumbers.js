const repeatNumbers = function(data) {
  let result = '';
  data.forEach(function(pair) {
    if (result !== '') {
      result += ', ';
    } if (pair[1] > 0) {
      for (let i = 1; i <= pair[1]; i++) {
        result += pair[0].toString();
      }
    }
  });
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));