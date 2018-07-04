const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const app = express();


massive(process.env.CONNECTION_STRING)
  .then((dbInstance) => {
    app.set('db', dbInstance);
  })
app.get('/getUser',(req,res)=>{
    const db = req.app.get('db');
    db.get_user()
    .then((user)=>{
      res.send(user);
    })
})

const port = process.env.PORT || 8080
app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
})