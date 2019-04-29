const isTherePath = (pathGiven) => {
    if (pathGiven) {
        return true;
    } else {
        console.log('Hint: Write a Path eg: documents/readme.md');
        return false;
    };
}


module.exports = {
    isTherePath
}
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