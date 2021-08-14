/**
 * null & undefined
 */
var i_am_null = null;
console.log("i_am_null :>> ", i_am_null); // null

var i_am_undefined;
console.log("i_am_undefined :>> ", i_am_undefined); // undefined

/**
 * Note:
 * Null 和 undefined 有什麼差別？
 * 1. 可以說是差不多的 但有些地方 還是會不同
 * 2. null 和 undefined 都是 return false
 * 3. 他們不一樣的地方在於 javascript裡的 object types， 它們是屬於不同的
 */
if (i_am_null) {
  console.log("if i_am_null :>> ", i_am_null);
} else {
  console.log("else i_am_null :>> ", i_am_null); // false
}

console.log("i_am_null typeof :>> ", typeof i_am_null); // object type
console.log("i_am_undefined typeof :>> ", typeof i_am_undefined); // undefined
