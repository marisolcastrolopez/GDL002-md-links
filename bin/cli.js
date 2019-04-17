#!/usr/bin/env node

//Grab provided args
const [,, ... args] = process.argv

//Print hello provided argvs
console.log(`Hello ${args}`)