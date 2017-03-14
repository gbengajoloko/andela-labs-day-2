var exports = module.exports = {} //exports the module
exports.reverseString = function (input) {
  if (input === '') {//checks if input is an empty string
    return null;
  }
  var rev = input.split('').reverse().join('') /*splits the 
  string into an array then reverses it and then joins the array back to sting*/
  if (input === rev) {/*checks if input is equal to the reverse retuns true if true*/
    return true;
  } else { /*returns string if reverse is not equal to input*/
    return rev;
  }
}
