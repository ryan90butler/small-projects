// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function reverseMe(num){

  if (typeof num !== 'number'){
    throw new Error(`reverseMe() requires a number and was given ${typeof num}`);
  }
  return Number(num.toString().split('').reverse().join(''));
  }
  console.log(reverseMe(432));

  // 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

  function palindrome(str){
    if (typeof str !== 'string'){
      throw new Error('only accepts strings')
    }
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

  const upperCase = (str) =>{
    return str.split(' ').map((word)=>{
            return (word[0].toUpperCase() + word.slice(1))
            }).join(' ')
  }
  console.log(upperCase('hi friend'))


  // Async testing example


  const getData = () => {
    return new Promise((resolve, reject) => {
      const data = { data: [1, 2, 3] };

      setTimeout(() => resolve(data), 1000)
    })
  }
  console.log(getData({a:3, b:5}))

  module.exports = {
    reverseMe,
    palindrome,
    upperCase,
    getData
  }