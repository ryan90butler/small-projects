const massive = require('massive');

massive('postgres://cpdxkccyrxwwyo:472696f5acd312d0017d4c7cde8a16a8f4d565b4d6bf22a92783dc5a3a064462@ec2-54-235-90-200.compute-1.amazonaws.com:5432/ddk5o7upppgnk8?ssl=true')
  .then(db => db.join())
  .then(data => console.log(data) || console.log('script ran successfully'))
  .catch(err => console.log(err));