const axios = require('axios');
const data = {
  name: null,
  homeland: null,
}

function getInfo (num){

  return axios.get('https://swapi.co/api/people/' + num)
    .then((response) => {
      data.name = response.data.name;

      return axios.get(response.data.homeworld)
    })
      .then(response => {
        data.homeland = response.data.name;
        return data
      })

    .catch(error =>
      console.log(error)
    );
};

getInfo(8)
  .then (response =>{
    console.log(response)
  })