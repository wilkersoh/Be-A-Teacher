/**
 * Every Symbol is unique and immutable primitive
 */

console.log('Symbol() === Sysmbol() :>> ', Symbol() === Sysmbol());

var directions = {
  UP   : Symbol( "UP" ),
  DOWN : Symbol( "DOWN" ),
  LEFT : Symbol( "LEFT" ),
  RIGHT: Symbol( "RIGHT" )
};
