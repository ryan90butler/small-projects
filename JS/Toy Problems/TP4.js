

console.log('start');

function callAsync(callback){
  setTimeout(callback,5000)
}

callAsync(()=>{
  console.log('yay!')
})

