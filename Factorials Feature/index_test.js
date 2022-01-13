var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns the factorial of 5',()=>{
      const expectedResult = 120;
      const input = 5;
      const result = Calculate.factorial(5);
      assert.equal(result,expectedResult);
    });
    it('returns the factorial of 3',()=>{
      const expectedResult = 6;
      const input = 3;
      const result = Calculate.factorial(3);
      assert.equal(result,expectedResult);

    });
    it('returns 1 when the input is 0 ',()=>{
      const expectedResult = 1;
      const input = 0;
      const result = Calculate.factorial(0);
      assert.equal(result,expectedResult);

      
    });

  });
});