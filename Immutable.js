/**
 * By value
 * 就是 Javascript裡的 Primitive Types
 */

var animal = "panda";
animal = "lion";

var string = "cat";
var otherString = string.toUpperCase();
console.log("string :>> ", string);
console.log("otherString :>> ", otherString);

var number = 50;
var otherNumber = number;
otherNumber = otherNumber + 100;
console.log("number :>> ", number);
console.log("otherNumber :>> ", otherNumber);

/**
 * 那要怎樣 把 Object or Array 變成 Immutable呢？
 */
let obj = {animal: "cat", from: {country: "UK"}}
Object.freeze(obj)

obj.animal = "dog";
obj.from.country = "Malaysia"
console.log('obj :>> ', obj);
