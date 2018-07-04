// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function returnMe(num){
return Number(num.toString().split('').reverse().join(''));
}
console.log(returnMe(432));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

function palindrome(str){
  const re = /[^A-Za-z0–9]/g;
  const lower = str.toLowerCase().replace(re, '');
  const reverse = lower.split('').reverse().join('');
  return reverse ==lower;
}
console.log(palindrome('A man a plan a canal. Panama'))
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first
// letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function upperCase(str){
  return str.replace(/\b\w/g, l => l.toUpperCase());
}
console.log(upperCase('hi friend'))