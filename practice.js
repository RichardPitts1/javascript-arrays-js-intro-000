var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var bar = "ProteinBar";

function addElementToBeginningOfArray(array, element) {
  var newArray = array
  newArray[0] = element
  return newArray;
}

console.log(addElementToBeginningOfArray(chocolateBars, bar))

console.log(chocolateBars);


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

