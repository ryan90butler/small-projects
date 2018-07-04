
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();

app.use(cors());
app.use(bodyParser.json());

massive('postgres://cpdxkccyrxwwyo:472696f5acd312d0017d4c7cde8a16a8f4d565b4d6bf22a92783dc5a3a064462@ec2-54-235-90-200.compute-1.amazonaws.com:5432/ddk5o7upppgnk8?ssl=true')
.then(dbInstance => {
  console.log('Database connected')
  app.set('db', dbInstance)
})
.catch(err =>{
  console.error(err);
});

app.get('/children', (req,res) => {
  const db = app.get('db');

  db.children.find()
    .then(children =>{
      res.send(children);
    });
});

app.post('/child', (req, res) => {
  const db = app.get('db');
  const postChild = req.body;
  postChild.parent_id = 1;

  db.children.insert(postChild)
    .then(child => {
      res.send(child);
    });
});

app.delete('/child/:id', (req, res)=> {
  const db = app.get('db');
  let child;

  db.children.findOne({ id: req.params.id})
    .then(formerChild => {
      child = formerChild;
    return db.children.destroy({ id: req.params.id })
  })
  .then(() => {
    res.send(child);
  });
});

const port = process.env.PORT || 8080

app.listen(port, () =>{
  console.log(`server is running and listening`);
});