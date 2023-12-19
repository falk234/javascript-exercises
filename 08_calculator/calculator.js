const add = function(a,b,) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	let sum=0;
  for (let i=0; i<array.length; i++){
    sum+=array[i];
  }
  return sum;
};

const multiply = function(factors) {
  let product=1;
  for (let i=0; i<factors.length; i++){
    product*=factors[i];
  }
  return product;
};

const power = function(number, power) {
  return number**power;
};

const factorial = function(number) {
  if (number == 0 || number==1) return 1;
  let result=1;
  while (number>1){
    result*=number--;
  }
  return result;
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
