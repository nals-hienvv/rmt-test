'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(
    `<body style='background-color:#22910C'><h1 style='color: orange;text-align:center'>Hello ${os.hostname()} test by hienvv version 2</h1></body>`
  );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
