var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var bar = "ProteinBar";

function addElementToBeginningOfArray(array, element) {
  return [bar, ...chocolateBars];
}

addElementToBeginningOfArray(chocolateBars, bar)
console.log(chocolateBars);


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// console.log(addElementToBeginningOfArray(chocolateBars, bar))

// console.log(chocolateBars);