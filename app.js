const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.static('script'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'NewPassword',
  database: 'lazizmu'
});

app.get('/', (req, res) => {
  res.render('index.ejs', {
    header_menus: [
      {id: 1, name: 'Beranda', link: ''},
      {id: 2, name: 'Tentang Kami', link: ''},
      {id: 3, name: 'Program', link: ''},
      {id: 4, name: 'Zakat Now', link: ''},
      {id: 5, name: 'Masuk', link: ''}
    ],
    footer_menus: [
      {id: 1, name: 'Program', link: ''},
      {id: 2, name: 'Info', link: ''},
      {id: 3, name: 'Kontak', link: ''}
    ],
    footer_1: [
      {id: 1, name: 'Donasi', link: ''},
      {id: 2, name: 'Zakat', link: ''},
      {id: 3, name: 'Infak', link: ''},
      {id: 3, name: 'Qurban', link: ''}
    ],
    footer_2: [
      {id: 1, name: 'Tentang Kami', link: ''},
      {id: 2, name: 'Tim Kami', link: ''},
      {id: 3, name: 'Syarat dan Ketentuan', link: ''},
      {id: 3, name: 'Dokumen', link: ''}
    ]
  });
});



app.listen(port);