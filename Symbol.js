/**
 * Every Symbol is unique and immutable primitive
 */

Number();
// shortchat > 3
String();
// shortchat > "3"
Boolean()
// shortchat > true

// Symbol not exist shortcut
Symbol();

console.log("Symbol() === Sysmbol() :>> ", Symbol() === Sysmbol()); // false

var directions = {
  UP   : Symbol( "UP" ),
  DOWN : Symbol( "DOWN" ),
  LEFT : Symbol( "LEFT" ),
  RIGHT: Symbol( "RIGHT" )
};
