function disemvowel(str) {
// [aeiou] tells what to look for to replace/remove
// 'g' tells to look globally (for every time it comes across the letters)
// 'i' tells to ignore the case (upper and lower case allowed)
return str.replace(/[aeiou]/gi, '');

}