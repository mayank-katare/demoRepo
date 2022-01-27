const fs= require('fs');
const request = require('request');

request('https://www.google.com').pipe(fs.createWriteStream('./html/google.html'));