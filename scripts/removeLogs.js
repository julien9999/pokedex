#!/bin/node
const fs = require('fs');

const content = 'LogBox.ignoreAllLogs();';
fs.appendFileSync('./index.js', content, err => {
  err && console.error(err);
});
