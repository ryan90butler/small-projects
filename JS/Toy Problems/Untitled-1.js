

//destructuring []{}

// const array = [1,2,3,4,5,6];
// const obj = {
//   name: 'Ryan',
//   age: '27',
//   eyeColor: 'hazel',
//   location: {
//     addresses: [1,2,3,4,5]
//   }
// }

// let me;

// function x ({location: {addresses: [first]}}){
//   first
// }
// x(obj)

// const { location: {addresses: [ ,,address]} } = obj;

// address

// function x([b, c]){
//   b;
//   c

// }

// x(array)

// function getLast(arr){
//   return arr[arr.length - 1]
// }

// const people = [2,3,56,545,'2asfasdfasdf asdk akfj']

// const hello = getLast(people)
// hello


//spreading

// function changeName([... array]){
//   array[0] = 'something new'
//   return array;
// }
// const people = [{name: 'Emily'}, {name: 'Ryan'}];

// const [ Emily ] = people;

// const newPerson = changeName(people)

// people
// newPerson


//block scope

// if (true){
//   var x = 12
// }

// function something(){
//   var x = 12;
// }
// x

// for (var i =0; i < 9; i++){

//     setTimeout(function(){
//       console.log(i)
//     }, 1)}



function getData(){
  return new Promise((resolve, reject)=>{
    resolve({name: 'Ryan'})
    reject(new Error('person does not exist'))
  })
}

const handleError = (error) => console.error(error);

function doSomething(){
  getData()
    .then(console.log)
    .catch(handleError)
}
doSomething()