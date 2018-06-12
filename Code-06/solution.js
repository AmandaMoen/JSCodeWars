function isNice(arr){
  // Check if there are any numbers in the array.
  // If no numbers, return false.
  if (arr.length===0) return false;
  return arr.every(num => arr.includes(num+1)|| arr.includes(num-1));
  return `Ì am Nice `
}