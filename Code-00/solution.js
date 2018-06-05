// Combined "var replaceDots = function(str)" into the below:
function replaceDots(str)  {
  /* Split the string at the dot, then replace the dot with a dash, joining the string at the dash. */
  return str.split('.').join('-');
}