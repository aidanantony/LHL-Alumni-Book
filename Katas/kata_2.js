const conditionalSum = function(values, condition) {
  let num = 0;
  if (condition === 'even') {
    for (value of values) {
      if (value % 2 === 0) {
        num += value;
      }
    }
  }

  if (condition === 'odd') {
    for (value of values) {
      if (value % 2 !== 0) {
        num += value;
      }
    }
  }
  return num;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));