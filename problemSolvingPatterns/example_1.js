//You are asked: write a function which takes two numbers and returns their sum

/* problem solving steps:
Restate the problem in your own words:
  - implement addition
What are the inputs?
  - integers? floats? what about strings for large numbers?
What are the ouputs?
  - integer? float? string?
Can the ouputs be determined from the inputs? Do we have enough information to solve the problem?
  -
How should I label the important pieces of data that are a part of the problem?
*/

//Write a function that takes in a string and returns counts of each character in the string.

charCount('aaaa'); //{ a: 4 }
const string = 'My phone number is 123456789';
//do we account for spaces?
//do we ignore casing? is "M" the same or different from "m"?

const emptyString = '';
//what should an empty string return? an empty object? null? undefined? an error?

const invalidString = 1234
//should this return an error?

const charCount = (str) => {
  //make object to return at the end
  //loop over string
    //if the char is a number/letter and is a key in object, add one to count
    //if the char is a number/letter and is not in object, add it and set value to one
    //if char is something else, dont do anything
  //return object at end
};