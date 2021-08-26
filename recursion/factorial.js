//Write a function called factorial which accepts a number and returns the factiorial of that number. A factorial is the product of an integer and all the intergers below it. Factorial of 4 is 24 because 4 * 3 * 2 * 1 = 24. Factorial 0 is 1.

// factorial (1) //1
// factorial (2) //2
// factorial (4) //24
// factorial (7) //5040

function factorial (num) {
  if(num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1)
  }
};