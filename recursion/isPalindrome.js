//write a function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same backwards and forwards), otherwise return false;

//isPalindrome('racecar') //true
//isPalindrome('hello') //false

function isPalindrome (str) {
  let flag = false;
  function helper (substr) {
    if(str.length <= 1){
       return str
      }
    if(substr[0] === substr[substr.length-1]) {
      flag = true;
      return substr.slice(1, substr.length - 2)
    } else {
      return flag;
    }
  }
  helper(str)
  return flag;
}

//alternate solution
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}