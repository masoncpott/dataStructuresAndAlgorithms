//write a function called maxSubarraySum which accept an array of integers and a number called n. The function whould calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//refactor
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0:
  if (arr.length < num) return null;
  //create first sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  //add the next number and subtract the first to shift the window to the right by one index
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}