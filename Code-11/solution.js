function cubeOdd(arr) {
  let sum = 0;
  for (var i = 0; i <arr.length; i++){
  	// must use (arr[i]) to make sure that it cubes the array.
    let cubed = Math.pow(arr[i], 3);
    if (isNaN(cubed)) {
      return undefined;
    } 
    if (cubed % 2 != 0 ) {
      sum += cubed;
    }
  }
  return sum;
};