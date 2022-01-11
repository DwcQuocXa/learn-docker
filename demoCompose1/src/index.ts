//const express = require('express');
import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

mongoose
  .connect('mongodb://mongo:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log('\nApp is running at port 5000');
    console.log('\nConnect to Mongo');
    app.listen(5000);
  })
  .catch((e) => console.log(e));
