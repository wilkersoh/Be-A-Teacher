/**
 * By value
 */

var x = 100;
var y = x; // copy from the x

y += 5

console.log('x :>> ', x);
console.log('y :>> ', y);

/**
 * immutable, not effect the origin object type value
 */
var string = "cat";
var newString = string.toUpperCase();
console.log('string :>> ', string); // not effect
console.log('newString :>> ', newString); // uppercase


function primitiveMutator(val) {
  return val = val + 1;
}
var xx = 1;
primitiveMutator(xx);
console.log(xx); // 1
