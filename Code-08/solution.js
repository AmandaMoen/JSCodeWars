var gimme = function (inputArray) {
// Use the slice() method to return a copy of the original array.
// Sort compareFunction to get the numbers in order (1-10).
   let secondArray = inputArray.slice().sort(function(a,b) { return a-b;});
   // Return the original index of the middle number of the 3 numbers (index[1] in the second array).
   return inputArray.indexOf(secondArray[1]);
};