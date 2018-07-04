
const axios = require('axios');

axios.get('https://swapi.co/api/people/1')
  .then((response) =>{
    console.log(JSON.stringify(response.data, null, 2))
  })
  .catch((error) =>{
    console.log('error')
  })


function callAsync(URL){
  return new Promise((resolve, reject) =>{
    resolve('hello can you hear me');

    reject("error");
  })
}


callAsync()
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })


