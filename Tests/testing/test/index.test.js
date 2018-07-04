const expect = require('chai').expect;
const should = require('chai').should;
const { reverseMe, palindrome, upperCase, getData } = require('../testing');


describe('Testing reverseMe()', function(){

  it('should return a number', function(){
    const result = reverseMe(123)

    expect(result).to.be.a('number')
  });

  it('should be a function', function(){
    expect(reverseMe).to.be.a('function')
  });

  it('should reverse a number', function(){
    const result = reverseMe(12345);

    expect(result).to.equal(54321);
  });

  it('should throw error if input value type is not a number', function(){

    const badFunc = reverseMe.bind(null, '12345')

    expect(badFunc).to.throw(Error);

  });
});

describe('Testing palindrome()', function() {

  it('should return a boolean', function() {
    expect(palindrome('racecar')).to.be.a('boolean')
  })

  it('should return `only accepts string` if type is not a string', function() {
    const badFunc = palindrome.bind(null, 4321)

    expect(badFunc).to.throw(Error)
  })

  it('should return true if palindrome', function() {
    expect(palindrome('racecar')).to.equal(true)
    expect(palindrome('mom')).to.equal(true)
  })

  it('should return false if not a palindrome', function(done) {
    expect(palindrome('racer')).to.equal(false)
    done();
  })
})

// describe('Testing upperCase()', function() {
  //should return an error if not a string
  //should capitalize first letter of each word
// })

// describe('Testing getData()', function() {
//   //should return an object
//   it('should return an object', async function() {
//     const results = await getData()
//     expect(results).to.be.a('object');
//   });

//   it('should return an object2', function(done) {
//     getData()
//       .then(data => {
//         expect(data).to.be.a('object');
//         const results = []
//         results.save(function(err) {
//           if (err) throw err;
//           else{
//             done();
//           }
//         });
//       })
//   });

  // it('should return an object3', function(done) {
  //   getData().should.eventually.equal('object').notify(done)
  // });

// })