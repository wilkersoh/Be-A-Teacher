/**
 * By reference
 * 幾乎 全部都是在 javascript裡面 都是 Object來的
 * 除了 null and undefined
 */

var arr = [];
var arr1 = arr;

arr1.push("cat");
console.log('arr :>> ', arr);
console.log('arr1 :>> ', arr1);

var obj = {animal: 'cat'};
var same_reference_obj = obj;

if(obj === same_reference_obj) {
  console.log("If obj === same_reference_obj is: >>", obj === same_reference_obj);
} else {
  console.log("Else obj === same_reference_obj is: >>", obj === same_reference_obj);
}

var otherObj = { animal: 'cat' };

console.log('obj === otherObj :>> ', obj === otherObj);
