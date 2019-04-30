const path = require('path');
const fs = require('fs');
// const mdLinks = require('../src/md-links.js')
const { tryThis } = require('../src/md-links.js')
console.log(tryThis)

const pathGiven = 'foo';
const pathInexistent = 'foo';
const directoryPath = path.join(__dirname, '');
const fileExistent = tryThis(pathInexistent)
const pathExistent = 'C:\\Users\\solca\\Documents\\Laboratoria\\mdlinks\\GDL002-md-links\\test-md-files'

// //Is there a path?
// describe('isTherePath', () => {
//   it('it should be an function', () => {
//     expect(typeof (mdLinks.isTherePath)).toBe('function');
//   });

//   it('isTherePath should return OK statement if there\'s a path', () => {
//     expect(mdLinks.isTherePath(pathGiven)).toEqual(
//       true
//     );
//   });

//   it('isTherePath should return an ERROR statement if theres not a path', () => {
//     expect(mdLinks.isTherePath()).toEqual(
//       false
//     );
//   });
// });

describe("Should read a directory",  () => {
  it('it should be an function', () => {
    expect(typeof (tryThis)).toBe('function')
  });

  it('Debería retornar error ENOENT', async()  => {
    await expect(tryThis(directoryPath)).rejects.toEqual('ENOENT');
  });

  it('the data is peanut butter', () => {
    return new Promise (tryThis(directoryPath)).then(data => {
      expect(data).toEqual('ENOENT');
    });
  });
});



// describe("Should read a directory", () =>{
//   test ("should read a directory",() => {
//     mdLinks.readDirectory("./").then((result) => {
//       expect(result).toBe([".editorconfig", ".eslintrc", ".git", ".gitignore", ".prettierrc", "README.md", "bin", "coverage", "node_modules", "package-lock.json", "package.json", "pruebaTest.md", "src", "test"]);
//     });
//   });
// });

//Path Exists?
// describe('fileExist', () => {
//   it('it should be an function', () => {
//     expect(typeof (mdLinks.fileExist)).toBe('function');
//   });
//   test('the data is peanut butter', async () => {
//     await expect(fileExist).resolves.toBe("foo\\bar does not exist");
//   });
  
// });

//Does the path exists?
// describe('fileExist', () => {
//   it('it should be an function', () => {
//     expect(typeof (mdLinks.fileExist)).toBe('function');
//   });

//   it('isItAdirectory should return a false statement if it does not exist', () => {
//     expect(mdLinks.fileExist(pathInexistent)).toBe(
//       "foo\\bar does not exist"
//     );
//   });

//   it('isItAdirectory should return a true statement if it exists', () => {
//     expect(mdLinks.fileExist(pathExistent)).toBe(
//       "C:\\Users\\solca\\Documents\\Laboratoria\\mdlinks\\GDL002-md-links\\test-md-files exists"
//     );
//   });
// });



// test('the data is peanut butter', () => {
//   return mdLinks.fileExist(pathInexistent).then(pathInexistent => {
//     expect(pathInexistent).toBe("foo\\bar does not exist");
//   });
// });




// describe('validateAbsPath', () => {
//   it('it should be an function', () => {
//     expect(typeof (mdLinks.validateAbsPath)).toBe('function');
//   });

//   it('validateAbsPath should return an error with an invalid absolute path', () => {
//     expect(mdLinks.validateAbsPath(invalidAbsPath)).toEqual(
//       false
//     );
//   });

//   it('validateAbsPath should return an OK message with an valid absolute path', () => {
//     expect(mdLinks.validateAbsPath(validAbsPath)).toEqual(
//       true
//     );
//   });
// });

