//validAnagram
//given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema", form from "iceman"

//all lowercase letters, no spaces, no numbers or punctuation

function validAnagram(string1, string2){
  // add whatever parameters you deem necessary - good luck!
  if(string1.length !== string2.length) {
      return false;
  }
  let counter1 = {};
  let counter2 = {};
  for(let letter of string1) {
      counter1[letter] = (counter1[letter] || 0) + 1;
  }
  for (let letter of string2) {
      counter2[letter] = (counter2[letter] || 0) + 1;
  }
  for(let key in counter1) {
      if(!(key in counter2)) {
          return false;
      }
      if(counter2[key] !== counter1[key]) {
          return false;
      }
  }
  return true;
}