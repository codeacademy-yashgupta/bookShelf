const { httpGet } = require('./');

describe('httpGet', () => {
  it('should make a http get request and return a promise', () => {
    const testURL = 'www.mckinsey.com';
    const receivedData = httpGet(testURL);
    expect(typeof (receivedData.then)).toEqual('function');
  });
});
