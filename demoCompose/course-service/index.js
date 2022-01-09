const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send({
    course: ['HTML', 'CSS', 'JavaScript', 'Docker'],
  });
});

app.listen(PORT, HOST);
console.log(`Running on ${HOST} and ${PORT}`);
