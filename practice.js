var chocolateBars = ["hundred grand", "kitkat", "skittles"];

var bar = "ProteinBar";

function addElementToBeginningOfArray(array, element) {
  return [bar, ...chocolateBars];
}

// console.log(addElementToBeginningOfArray(chocolateBars, bar));
// console.log(chocolateBars);


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, bar));

// console.log(chocolateBars);



function addElementToBeginningOfArray(array, element) {
 return [element, ...array];
}

console.log(addElementToBeginningOfArray(chocolateBars, bar));

console.log(chocolateBars);


