'use strict';
const express = require('express');
const pug = require('pug');

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'http://localhost:' + PORT;

const app = new express();
app.set('views', __dirname + '/web');
app.set('view engine', 'pug')

const options = {
  extensions: ['pug', 'js', 'css', 'svg'],
  index: false,
  redirect: false
};
app.use(express.static('web', options));

app.get('/', function (req, res) {
  const xforwardedhost = req.headers['x-forwarded-host'] || '';
  res.render('index', { xforwardedhost: xforwardedhost });
});

app.listen(PORT);
console.log(`App listening on port ${PORT}`);
