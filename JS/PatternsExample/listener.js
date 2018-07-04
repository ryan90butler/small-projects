// const {events} = require('./patterns');

// events.on('onDataChange', data => console.log('subscriber 1 got the data', data)),

// events.on('something', data => console.log('got it!', data))

(function(){
  const x = 12;
  const y = 3;

  function add(){
    return x + y;
  }
  return {
    add: add
  }
}())
