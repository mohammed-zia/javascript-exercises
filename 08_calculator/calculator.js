const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
  let sum = arr.reduce(function(a,b){
    return a+b;
  }, 0);
  return sum
};

const multiply = function(arr) {
  let total = 0;
  for(let i = 0; i<arr.length; i++){
    if(i === 0){
      total = arr[i]
    }
    else{
      total *= arr[i]
    }
  }
  return total
};

const power = function(a,b) {
  return a ** b
	
};

const factorial = function(a) {
  total = 0
  for(i = 0; i <= a; i++){
    if(i === 0){
      total = 1
    }
    else{
      total = i * total
    }
  }
  return total
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
