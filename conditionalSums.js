const conditionalSum = function(values, condition) {
  let sum = 0;
  if (condition === "even") {
    values.forEach(function(num) {
      if (num % 2 === 0) {
        sum += num;
      };
    });
  } else if (condition === "odd") {
    values.forEach(function(num) {
      if (num % 2 !== 0) {
        sum += num;
      };
    });
  };
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));