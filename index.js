/**
 * Use terminal to run this script
 * > $ node index.js
 */

/**
 * undefined
 */
console.log("read_before_create :>> ", read_before_create) // undefined
var read_before_create;

/**
 * boolean
 */
var i_am_boolean = true;
console.log('i_am_boolean :>> ', i_am_boolean); // true

/**
 * number
 */
var i_am_number = 10;
console.log('i_am_number :>> ', i_am_number); // 10

/**
 * string
 */
var i_am_string = "Who am i";
console.log('i_am_string :>> ', i_am_string); // Who am i


/**
 * 我們怎樣 檢查 它是 屬於什麼 types呢？
 * 用 typeof
 */
if(i_am_string === "string") {
  console.log('i_am_string :>> ', i_am_string);
}

