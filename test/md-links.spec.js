const mdLinks = require('../src/md-links.js')
const pathGiven = 'foo/bar';

//Is there a path?
describe('isTherePath', () => {
  it('it should be an function', () => {
    expect(typeof (mdLinks.isTherePath)).toBe('function');
  });

  it('isTherePath should return OK statement if there\'s a path', () => {
    expect(mdLinks.isTherePath(pathGiven)).toEqual(

      true
    );
  });

  it('isTherePath should return an ERROR statement if theres not a path', () => {
    expect(mdLinks.isTherePath()).toEqual(
      false
    );
  });
});

//Is the path a directory or a file?
describe('isTherePath', () => {
  it('it should be an function', () => {
    expect(typeof (mdLinks.isTherePath)).toBe('function');
  });

  it('isTherePath should return OK statement if theres a path', () => {
    expect(mdLinks.isTherePath(pathGiven)).toEqual(
      true
    );
  });

  it('isTherePath should return an ERROR statement if theres not a path', () => {
    expect(mdLinks.isTherePath()).toEqual(
      false
    );
  });
});



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

