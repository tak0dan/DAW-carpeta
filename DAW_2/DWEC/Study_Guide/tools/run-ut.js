'use strict';
// Loads main.js then uts.js in ONE shared global scope, like the browser.
const fs = require('node:fs');
const vm = require('node:vm');
const dir = process.argv[2];
const mainSrc = process.argv[3] ? fs.readFileSync(process.argv[3], 'utf8') : fs.readFileSync(dir + '/main.js', 'utf8');
const ctx = vm.createContext({ console });
vm.runInContext(mainSrc, ctx, { filename: 'main.js' });
vm.runInContext(fs.readFileSync(dir + '/uts.js', 'utf8'), ctx, { filename: 'uts.js' });
