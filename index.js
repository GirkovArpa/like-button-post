'use strict';

let likes = 68;

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json()); // required to access JSON of POST request

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/likes', (req, res) => {
  res.send({ likes });
});

app.post('/like', (req, res) => {
  likes++;
  res.send({ likes });
})

app.listen(3000, () => {
  console.log('Server online @ localhost:3000');
});

