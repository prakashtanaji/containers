const express = require('express');
//const routes = require('./routes/index');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi There !');
  });

  app.get('/currenttime', (req, res) => {
    const date = Date();
    res.send('Current time is ' + date);
  });

const server = app.listen(64000, () => {
    console.log(`Node server is running on http://localhost:${server.address().port} `);
  });

