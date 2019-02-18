const { httpPut } = require('./');

describe('httpPut', () => {
  it('should make a http PUT request and return a promise', () => {
    const testURL = 'http://www.localhost:3001/bookLike';
    const receivedData = httpPut(testURL, {});
    expect(typeof (receivedData.then)).toEqual('function');
  });
});
