function validatePIN(pin) {
  //return true or false
  // Return (^ matches beginning of line), \d matches any decimal digit (0-9)
  // {4} matches 4 digits, $ matches end of line, | means or, 
  // {6} matches 6 digits, $ matches end of line
  return /^\d{4}$|^\d{6}$/.test(pin);
}
