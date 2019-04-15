var fs = require('fs');

module.exports = {
    validateAbsPath: (pathToTest) => { 
        fs.stat(pathToTest, function (err) {
        if (!err) {
            console.log('OK :) File or directory exist');
        }
        else if (err.code === 'ENOENT') {
            console.log('file or directory does not exist');
        }
    })
},
    validateRelPath: 1,
}