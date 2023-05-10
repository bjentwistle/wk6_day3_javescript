const assert = require('assert');

// assert.strictEqual(1, 1);
//assert.strictEqual(1, '1');
//assert.strictEqual([1, 2, 3], [1, 2, 3])  //fails because not equal in memory

const array1 = [1, 2, 3]
const array2 = array1
assert.strictEqual[array1, array2]  //this passes

//So can use assert.deepEqual
assert.deepStrictEqual([1, 2, 3], [1, 2, 3]) //passes


//other variants 
// assert.equal() // loose equality
// assert.strictEqual()
// assert.deepStrictEqual()
// assert.deepEqual() // loose equality
