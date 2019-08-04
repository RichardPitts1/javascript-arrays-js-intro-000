var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var bar = "ProteinBar";

function addElementToBeginningOfArray(array, element) {
  var newArray = array
  newArray.unshift(element)
  return newArray;
}

console.log(addElementToBeginningOfArray(chocolateBars, bar))
  return [bar, ...chocolateBars];
console.log(chocolateBars);


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

console.log(addElementToBeginningOfArray(chocolateBars, bar))

console.log(chocolateBars);