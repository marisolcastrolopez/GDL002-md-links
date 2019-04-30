const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '');
//passsing directoryPath and callback function
const tryThis = (directoryPath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                // console.log('Unable to scan directory: ' + err);
                reject(err);
                return;
            }

            else {resolve(files.forEach(function (file) {
                // Do whatever you want to do with the file
                console.log(file);
            }));
        }
            // listing all files using forEach

        });
    });

}


module.exports = {
    tryThis
}
console.log(tryThis(directoryPath));

// const fs = require('fs');

// const mdLinks = (path,options) => {

// }

// const isTherePath = (pathGiven) => {
//     if (pathGiven) {
//         return true;
//     } else {
//         console.log('Hint: Write a Path eg: documents/readme.md');
//         return false;
//     };
// }

// const pathExist = (pathToTest) => {
// fs.stat(pathToTest, function(err) {
//     if (!err) {
//         console.log('file or directory exists');
//     }
//     else if (err.code === 'ENOENT') {
//         console.log('file or directory does not exist');
//     }
// });
// }

// //requiring path and fs modules


// // const fileExist = (file) => {
// //     fs.access(file, fs.constants.F_OK, (err) => {
// //         console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
// //     });
// // }





// module.exports = {
//     mdLinks,
//     isTherePath,
//     pathExist
// }

// const isItAdirectory = (pathGiven) => {
//     if (fs.existsSync(pathGiven)) {
//         console.log('It exists');
//         return true;
//     }
//     else {
//         console.log('It doesnt exist');
//         return false;
//     }
// }

// function existsSync(path) {
//     try {
//         path = toPathIfFileURL(path);
//         validatePath(path);
//     } 
//     catch {
//         return false;
//     }
//     const ctx = { path };
//     binding.access(pathModule.toNamespacedPath(path), F_OK, undefined, ctx);
//     return ctx.errno === undefined;
// }

//


// var fs = require('fs');
// var fileExistSync = require('./fileExistSync');

// var exist = fileExistSync('/var/folders/zm/jmjb49l172g6g/T/65b199');

// module.exports = fs.existsSync || function existsSync(filePath) {
//     try {
//         fs.statSync(filePath);
//     } catch (err) {
//         if (err.code == 'ENOENT') return false;
//     }
//     return true;
// };


// let fs = require('fs');
// let filePath = process.argv[2];

// fs.readFile(filePath, function callback(err, data) {
//    if (err) {
//        return err
//    }

//    let str = data.toString();
//    let arr= str.split('\n');
//    let l = arr.length-1;
//    console.log(l);

//  });
// var fs = require('fs');
// let path = require('path');



// module.exports = {
//     validateAbsPath: (pathToTest) => {
//         fs.stat(pathToTest, function(err) {
//             if (!err) {
//                 console.log('file or directory exists');
//             }
//             else if (err.code === 'ENOENT') {
//                 console.log('file or directory does not exist');
//             }
//         });
// },
//     validateRelPath: 1,
// }


// const findDirectory = (dirName, extStr, cb) =>{
//     let arr=[];
//     fs.readdir(dirName, function callback(err, data){
//         if(err){return cb(err)}

//         let l = data.length;
//         for (let i = 0; i < l; i++){
//             let x = data [i];
//             let exten = path.extname(x);

//             if(exten == '.'+ extStr){ arr.push(x);}
//         }
//         return cb(null, arr);
//     })
// }
// module.exports = {
//     findDirectory
// }

// const {findDirectory} = require('../src/md-links.js');
// const ext = '.md';
// let dir = 'C:\\Users\\solca\\Documents\\Laboratoria\\mdlinks\\GDL002-md-links\\src';
// let path = require('path');

// console.log(findDirectory, ext, dir)

// let callback = function(err, data){
//     console.log(data);
//     let dataJS = path.basename('C:\\Users\\solca\\Documents\\Laboratoria\\mdlinks\\GDL002-md-links\\src\\readme.md');
//     if(err){console.log(err); return err}
//     for(let i = 0; i< dataJS.length; i++){
//         console.log(dataJS[i])

//     }
// }

// findDirectory(dir, ext, callback);