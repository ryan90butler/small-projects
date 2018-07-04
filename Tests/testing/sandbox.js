const age =[19,22,29]

function x(ages) {
  let max = Math.max(...ages),
      min = Math.min(...ages);
      diff = (max-min);
      return [min, max, diff];
}
console.log(x(age))

const alphabeticArray = ['Washer', 'Dryer', 'Yarn', 'Acid', 'Lovely'];

const numericArray = [33, 100, 9, 45, 1, 330, 3200];

function returnSortedArray(input) {
    if (typeof input[0] === 'number') {
        function sortNumber(a, b) {
            return a - b;
        }

        return input.sort(sortNumber);
    }
    else return input.sort();
}

console.log(returnSortedArray(alphabeticArray));

console.log(returnSortedArray(numericArray));

const words = ['dad', 'mom', 'abba', 'wert', 'waldo']
function h (num) {
  return num.sort()
}
console.log(h(words))

function x (input) {
  function sortNumber(a,b) {
  return a - b;
}
if(typeof input[0] === 'number'){
return input.sort(sortNumber);
}
else return input.sort();
}
console.log(x(numericArray))
console.log(x(words))


const duplicateNumericArray = [1, 1, 2, 2, 3, 2, 1, 4]

function removeDuplicates(input) {
  return input.filter(function(value, index) {
    return input.indexOf(value) == index});
}

console.log(removeDuplicates(duplicateNumericArray));

function removeD(input) {
  return input.filter(function(value, index) {
    return input.indexOf(value) == index});
}
console.log(removeD(duplicateNumericArray)[0])