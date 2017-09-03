#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const bodyParser = require('body-parser');

const bundleRenderer = createBundleRenderer(
  // Load the SSR bundle with require.
  require('./dist/vue-ssr-bundle.json'),
  {
    // Yes, I know, readFileSync is bad practice. It's just shorter to read here.
    template: '<!--vue-ssr-outlet-->'
  }
);

// Create the express app.
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static assets from ./dist on the /dist route.
app.use('/dist', express.static('dist'));

// Render all other routes with the bundleRenderer.
app.get('*', (req, res) => {
  console.log('GET')
  // res.sendFile(path.join(__dirname + '/index.html'));
//   bundleRenderer
//     // Renders directly to the response stream.
//     // The argument is passed as "context" to main.server.js in the SSR bundle.
//     .renderToStream({url: req.path})
//     .pipe(res);
});

app.post('/render', (req, res) => {
  console.log('POST', JSON.parse(req.body.state))
  // bundleRenderer
  // .renderToString({state: req.body.state}, (err, html) => {
  //   console.log('ok');
  // })
  // Renders directly to the response stream.
  // The argument is passed as "context" to main.server.js in the SSR bundle.
  bundleRenderer
  .renderToStream({url: req.path, state: JSON.parse(req.body.state)})
  .pipe(res);
});

// Bind the app to this port.
app.listen(8888);