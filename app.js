const express = require('express');

const app = express();

app.use(express.static('public'));

app.use(express.static('script'));

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/index', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000);