//write a function called reverse which accepts a string and returns a new string in reverse.

//reverse('awesome') //'emosewa'

function reverse (string) {
  if(string.length <= 1) return string;
  return reverse(string.slice(1)) + string[0]
};