const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const chalk = require('chalk');

let linksArray = []
//Check if the user write a path
const isThereAPath = (pathGiven) => {
    if (pathGiven) {
        console.log('You enter a path successfully');
        return true;
    } else {
        console.log('Hint: Write a file to scan eg: yourFileName.md');
        return false;
    };
}

//Check existence of the file in the directory
const checkFileDirectory = (directoryPath) => {
    return new Promise((resolve, reject) => {
        fs.access(directoryPath, fs.constants.F_OK | fs.constants.W_OK, (err) => {
            //handling error
            if (err) {
                console.error(
                `${directoryPath} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
                reject(err);
                return;
            }
            else {
                let pathFile = path.join(__dirname, directoryPath);
                console.log(chalk.blue(`${directoryPath} exists, and it is writable`));
                console.log(goodPath);
                resolve(true);
                return pathFile;
            }
        });
    });
}



let regexUrlCheck = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
module.exports = {
    isThereAPath,
    checkFileDirectory
}

//Check if the function works
// console.log(checkFileDirectory('mdFileTest.md'))