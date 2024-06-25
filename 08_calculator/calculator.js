const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
	
};

const sum = function(input) {
  return input.reduce((total, current) => {
    return total + current;
  }, 0);
	
};

const multiply = function(input) {
  return input.reduce((total, current) => {
    return total * current;
  });
};

const power = function(x, y) {
  return x ** y;
	
};

const factorial = function(input) {
  let value = 1;

  if (input === 0)
    return 1;

  for(let i = 1; i <= input; i++)
  {
    value *= i;
  }

  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
