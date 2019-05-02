#!/usr/bin/env node

//Library used to color statements in CLI
const chalk = require('chalk');
//Our external JS file with our functions
const mdLinks = require('../src/md-links.js');
//Provided args in CLI
const pathGiven = process.argv[2];


mdLinks.checkFileDirectory(pathGiven);

//Print hello provided argvs
// console.log(`${chalk.blue(mdLinks.checkFileDirectory(pathGiven))}`);

