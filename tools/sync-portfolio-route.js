#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'portfolio.html');
const cleanRoute = path.join(root, 'portfolio', 'index.html');

const content = fs.readFileSync(source, 'utf8').replace(/[ \t]+$/gm, '');
fs.writeFileSync(cleanRoute, content);
console.log('Synced portfolio.html to portfolio/index.html');
