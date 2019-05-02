const fs = require('fs');
const path = require('path');
const { isThereAPath } = require('../src/md-links.js');
const { checkFileDirectory } = require('../src/md-links.js');
const { getLinks } = require('../src/md-links.js');

//Is there a path?
describe('isTherePath', () => {
  test('it should be an function', () => {
    expect(typeof (isThereAPath)).toBe('function');
  });

  test('isTherePath should return OK statement if there\'s a path', () => {
    expect(isThereAPath('mdFileTest.md')).toEqual(
      true
    );
  });

  test('isTherePath should return an ERROR statement if theres not a path', () => {
    expect(isThereAPath()).toEqual(
      false
    );
  });
});

describe("Should read the existence of a file",  () => {
  test('it should be an function', () => {
    expect(typeof (checkFileDirectory)).toBe('function')
  });

  test('it should return an ENOENT error', ()  => {
    checkFileDirectory('nonExistentFakeFile.md').then((result) => {
      expect(result).contains('ENOENT').catch(error);
    })
  });

  test('it should return files', ()  => {
    checkFileDirectory('mdFileTest.md').then((result) => {
      expect(result).contains(`mdFileTest.md exists, and it is writable`).catch(error);
    })
  });
});

describe("Should read the existence of a file",  () => {
  test('it should be an function', () => {
    expect(typeof (getLinks)).toBe('function')
  });

  // test('it should return an ENOENT error', ()  => {
  //   getLinks('nonExistentFakeFile.md').then((result) => {
  //     expect(result).contains('ENOENT').catch(error);
  //   })
  // });

  // test('it should return files', ()  => {
  //   getLinks('mdFileTest.md').then((result) => {
  //     expect(result).contains(`mdFileTest.md exists, and it is writable`).catch(error);
  //   })
  // });
});