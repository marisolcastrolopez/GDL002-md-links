const mdLinks = require('../src/md-links.js');
const path = require('path');
const invalidAbsPath = path.basename('C:\\temp\\invalidabspath.html');
const validAbsPath = path.basename('C:\\');

describe('validateAbsPath', () => {
  it('it should be an function', () => {
    expect(typeof (mdLinks.validateAbsPath)).toBe('function');
  });

  it('validateAbsPath should return an error with an invalid absolute path', () => {
    expect(mdLinks.validateAbsPath(invalidAbsPath)).toEqual(
      console.log('File or directory does not exist')
    );
  });

  it('validateAbsPath should return an OK message with an valid absolute path', () => {
    expect(mdLinks.validateAbsPath(validAbsPath)).toEqual(
      console.log('OK :) File or directory exist')
    );
  });
});


