
// Write a function that takes in an array of numbers multiplies them by two and return a new array.

function byTwo(arr){
  return arr.map(num=>
    (num * 2))
}
// console.log(byTwo([1,2,3,4]))

// Write a function that takes in a string and reverse it.

function reverseString(str){
  return str.split('').reverse().join('')
}
// console.log(reverseString('hello'))

// Write a function that takes in a string (that will be multiple words) reverse each word but keeps it's same index.

function reverseMe(str){
  return str.split(' ').map(w=>w.split('').reverse().join('')).join(' ')
}
// console.log(reverseMe('this is a test'))

// Write a function for form validation. It takes in an array of inputs. It checks to make sure each input contains a
// value if not it turns the border and label red of all the inputs that are invalid. If all are successful
// alert form validated. Make this in jsbin or a create-react-app sandbox.

function validate(){

}

// Write a JavaScript function to convert an amount to coins. The function will take in two params an amount and an
//array of avaliable coin amont.
// coinMaker(48, [1, 5, 10, 25]) = [25, 10, 10, 1, 1, 1];

function coins(total, coins){
  return coins.sort((a,b)=>a<b).reduce((result,coin)=>{
    while (total - coin >= 0){
      total = total - coin;
      result.push(coin)
    };
    return result;
  }, []);
}

console.time('timer')
console.log(coins(1, [1,5,10,25]))
console.timeEnd('timer')

//Write a function that duplicates the map functionality

const map = (arr,cb)=>{
  const answer =[];
  arr.forEach(element=>{
    answer.push(cb(element))
  });
  return answer;
}

// console.log(map([1,2,36,7], int => int * 10))