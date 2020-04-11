'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json()); // required to access JSON of POST request

app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/like', (req, res) => {
  res.send(`Thanks for liking my page, ${req.body.username}!`);
})

app.listen(3000, () => {
  console.log('Server online @ localhost:3000');
});

