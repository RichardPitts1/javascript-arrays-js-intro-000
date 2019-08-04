var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var bar = "ProteinBar";

function addElementToBeginningOfArray(array, element) {
  var x = array.unshift(element);
  return x;
}
console.log(addElementToBeginningOfArray(chocolateBars, bar))

console.log(chocolateBars);


function destructivelyAddElementToBeginningOfArray(array, element) {
  
}