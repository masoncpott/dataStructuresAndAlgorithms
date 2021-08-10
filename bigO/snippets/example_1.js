//suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number "n"

//one approach
function addUpTo (n) {
  let total = 0;
  for (i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(addUpTo(6)); //output is 21

//another approach
function addUpTo (n) {
  return n * (n + 1) / 2;
}

console.log(addUpTo(6)); //output is 21