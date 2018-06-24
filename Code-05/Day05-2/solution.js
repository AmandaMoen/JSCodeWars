function capitalize(s){
  // Make an even array to put the split chars of the input (s)
  let evenArray = s.split('');
  let oddArray = [];
  // Remember, 0 is an even number
  oddArray.push(evenArray[0]);
  // Start at index 1 because 0 is accounted for
  for(let i=1; i<evenArray.length; i++) {
    // If i is at an even index. In other words, divided by two, remainder is 0
    if(i%2 === 0) {
      oddArray.push(evenArray[i]);
      evenArray[i] = evenArray[i].toUpperCase();
    }else{
      oddArray[i] = evenArray[i].toUpperCase();
    }
  }
  // Capitalize first letter of second string
  evenArray[0] = evenArray[0].toUpperCase();
  // Join letters back into strings between characters
  // Return array with two variations in it
  let answer=[evenArray.join(''), oddArray.join('')];
  return answer;
}