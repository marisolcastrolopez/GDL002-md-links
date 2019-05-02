const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const chalk = require('chalk');
var markdownLinkExtractor = require('markdown-link-extractor');


//Check if the user write a path
const isThereAPath = (pathGiven) => {
    if (pathGiven) {
        console.log(chalk.green('✔ You enter a path successfully'));
        return true;
    } else if (pathGiven === undefined) {
        console.log(chalk.red('✖ Hint: Write a file to scan eg: yourFileName.md'));
        return false;
    };
}

//Check existence of the file in the directory
const checkFileDirectory = (directoryPath) => {
    return new Promise((resolve, reject) => {
        fs.access(directoryPath, fs.constants.F_OK | fs.constants.W_OK, (err) => {
            //handling error
            if (err) {
                console.error(chalk.red(
                    `✖ ${directoryPath} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`));
                reject(err);
                return;
            }
            else {
                console.log(chalk.green(`✔ ${directoryPath} exists, and it is writable`));
                console.log(directoryPath);
                resolve(true);
                return directoryPath;
            }
        });
    });
}

const getLinks = (directoryPath) => {
    fs.readFile(directoryPath.toString(), 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            var links = markdownLinkExtractor(data);
            // console.log(typeof links);
            links.forEach(function (link) {
                function checkStatus(res) {
                    counter = 0;
                    if (res.ok) { // res.status >= 200 && res.status < 300
                        return console.log(chalk.green(`✔ `, res.statusText), res.status, link, ++counter, ' link');
                    } else {
                        // console.log('Hubo un problema con la petición en este link: ', res.statusText, link);
                        throw MyCustomError('This link is broken: ', res.statusText, link, res.status);
                    }
                }
                fetch(link)
                    .then(checkStatus)
                    .catch(res => console.log(chalk.red(`✖ `), 'This link is broken: ', chalk.red(link)))
            });
        }
    });
};

module.exports = {
    isThereAPath,
    checkFileDirectory,
    getLinks
}

//Check if the function works
// console.log(checkFileDirectory('mdFileTest.md'))