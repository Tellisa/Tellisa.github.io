const assert=require('assert');
const Rooster=require('../index');
describe('Rooster',()=>{
  describe('.announceDawn',()=>{
    it('returns a rooster call',()=>{
      const expected = 'cock-a-doodle-doo!';
      const test=Rooster.announceDawn();     
      assert.ok(test===expected);
    });
  });
  describe('.timeAtDawn',()=>{
    it('returns its argument as a string',()=>{
    const test1 = Rooster.timeAtDawn(7);
    const actual= '7';
    assert.strictEqual(test1,actual);
   });
   it('throws an error if passed a number less than 0',()=>{
     const number = -1;
     assert.throws(()=>{ Rooster.timeAtDawn(number);},RangeError);
   });
   it('throws an error if passed a number graeter than 23',()=>{
     const number = 24;
     assert.throws(()=>{ Rooster.timeAtDawn(number);},RangeError);
   });
  });
});