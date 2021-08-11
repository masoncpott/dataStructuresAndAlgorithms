//Write a function called "same" that accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in teh second array. The frequency of values must be the same.

//naive solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9])) //returns true
same([1, 2, 3], [1, 9]) //returns false
same([1, 2, 1], [4, 4, 1]) //returns false (must be the same frequency)