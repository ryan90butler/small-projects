
// const students = ['ryan','emily','josh']

// function objConverter(arr){
//   var obj = {};
//   arr.forEach((str, i)=>{
//     obj["str"+i] = str
//   })
//   return obj
// }

// console.log(objConverter(students))

// function objConverter(arr){
//   return arr.reduce((obj, str, i)=>{
//     obj[`str${i}`] = str;
//     return obj
//   }, {});

// }

// console.log(objConverter(students))

// function howLong(desiredPower, mins, sec,actualPower){
//   let quotient =  desiredPower/actualPower;
//   let minutes = Math.floor((((mins * 60) + sec) * quotient)/60);
//   let seconds = Math.round((((mins *60)+ sec) * quotient) % 60);
//   return `this takes ${minutes} mins and ${seconds} seconds`
// }

// console.log(howLong(800,4,20,57))

const string = 'my-name_is/ryan';
const camelCaseIt = (str) =>{
  let splitArr = str.split(/[^\w\s)]|[_]/g)
  let capitalized = splitArr.map((word,i)=>{
    if (i>0){
      return word[0].toUpperCase() + word.slice(1)
    }else{
      return word
    }
  })
  return capitalized.join('');
}

console.log(camelCaseIt(string))