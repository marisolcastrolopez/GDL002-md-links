#!/usr/bin/env node
const chalk = require('chalk');
//Grab provided args
const mdLinks = require('../src/md-links.js')
const [,, ... args] = process.argv

//Print hello provided argvs
console.log(chalk.blue(`Hello ${args}`))


