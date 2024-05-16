let findSum = (value, index, array) => {
  if (isNaN(value)) {
    throw "not a number"; //isNan() checks if it is a number or not
  }
  sum += value;
};
let areNotValidNumbers = (a, b) => {
  return isNaN(a) || isNaN(b);
};

let subtractNumbers = (a, b) => {
  if (areNotValidNumbers(a, b)) {
    throw "Invalid Number(s)"; //throws exception if invalid no.
  }
  return a - b;
};

let multiplyNumbers = (a, b) => {
  if (areNotValidNumbers(a, b)) {
    throw "Invalid Number(s)";
  }
  return a * b;
};

let divideNumbers = (a, b) => {
  if (areNotValidNumbers(a, b)) {
    throw "Invalid Number(s)";
  }
  if (b === 0) {
    /**
     * Safeguarding from divide by 0 error
     */
    throw "Divisor must not be 0";
  }
  return a / b;
};

const numbers = [1, 2, 3];
let sum = 0;
numbers.forEach(findSum);
console.log("findSum:" + sum); //printing sum
console.log("Subtract:" + subtractNumbers(numbers[0], numbers[1])); //printing subtraction
console.log("Multiplication:" + multiplyNumbers(numbers[2], numbers[0])); //printing multiplication
console.log("Divide:" + divideNumbers(sum, numbers[2])); //printing division

function multiplier(x) {
  function inside(y) {
    return x * y;
  }
  return inside;
}
