import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';
import siteConfig from './siteConfig';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const appString = renderToString(<App {...siteConfig} />);

  res.send(template({
    body: appString,
    siteConfig: siteConfig(req)
  }));
});

const port = process.env.port || 3071;

server.listen(port);
console.log('listening', port, Date.now());
