QUnit.test('getChange should return something', function(assert) {
  var result = getChange();
  assert.ok(result);
});

QUnit.test('getChange should return an array', function(assert) {
  var result = getChange();
  assert.ok(Array.isArray(result));
});

QUnit.test('getChange(1,1) should equal [] - an empty array', function(assert) {
  var result = getChange(1, 1); //no change/coins just an empty array
  var expected = [];
  assert.deepEqual(result, expected);
}); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/

QUnit.test('getChange(1,2) should return [1]', function(assert) {
  var result = getChange(1, 2);
  var expected = [1];
  assert.deepEqual(result, expected);
});

QUnit.test('getChange(1,3) should return [2]', function(assert) {
  var result = getChange(1, 3);
  var expected = [2];
  assert.deepEqual(result, expected);
});

QUnit.test('getChange(3,10) should return [5, 2]', function(assert) {
  var result = getChange(3, 10);
  var expected = [5, 2];
  assert.deepEqual(result, expected);
});

// totalPayable = 486           // £4.86
// cashPaid     = 600           // £6.00
// dfference    = 114           // £1.14
// change       = [100,10,2,2]  // £1, 10p, 2p, 2p

QUnit.test('getChange(486, 600) should equal [100, 10, 2, 2]', function(assert) {
  var result = getChange(486, 600);
  var expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);
});
