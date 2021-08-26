// Write a function called Power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow(), do not worry about negative bases and exponents.


// power(2, 0) returns 1
// power(2, 2) returns 4
// power(2, 4) returns 16

function power (base, exponent) {
  if(exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1)
  }
}