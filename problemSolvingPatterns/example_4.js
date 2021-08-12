//Multiple Pointers

//write a function called "sumZero" which accepts a SORTED array of integers. The function should find the FIRST pair where the sum is 0. Return as array that includes both values that sum to zero or undefined if a pair does not exist.

//Naive solution
//time complexity: O(n^2)
//space complexity: O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

//refactored solution
//time complexity: O(n)
//space complexity: O(1)
function sumZero(arr) {
  //declare two pointers
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 6, 10])) //returns [-3, 3]