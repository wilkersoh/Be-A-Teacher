/**
 * By reference
 * 就是 Javascript裡的 Object Types 除了 null and undefined
 */

/**
 * 那樣怎樣 去 更改 immutable 裡 而不會影響到 原本的 data對象呢？
 */
var i_am_object = { animal: "cat" };
var clone_new_object_in_memory = Object.assign({}, i_am_object, {
  gender: "male",
});

console.log("i_am_object :>> ", i_am_object);
console.log("clone_new_object_in_memory :>> ", clone_new_object_in_memory);
