#!/usr/bin/env node

//Grab provided args
const mdLinks = require('../src/md-links.js')
const [,, ... args] = process.argv

//Print hello provided argvs
console.log(`Hello ${args}`)