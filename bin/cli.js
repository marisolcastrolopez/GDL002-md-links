#!/usr/bin/env node
'use strict';
//Library used to color statements in CLI
const path = require('path');
const chalk = require('chalk');
const fetch = require('node-fetch');
//Our external JS file with our functions
const mdLinks = require('../src/md-links.js');
//Provided args in CLI
const pathGiven = process.argv[2];

mdLinks.isThereAPath(pathGiven);
mdLinks.checkFileDirectory(pathGiven);
mdLinks.getLinks(pathGiven);

// console.log(process.argv)
// console.log(`${chalk.blue(mdLinks.checkFileDirectory(pathGiven))}`);

