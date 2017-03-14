var exports = module.exports = {} //exports module
exports.words = function (input) {
  var rem = input.replace(/ {2}/g, ' ').replace(/\n/g, ' ').replace(/\t/g, ' ');/*checks for
  multiline, tabs and multiple spaces*/
  var arr = rem.split(' ');// splits the string into an array
  var result = {};
  for (var i = 0; i < arr.length; i++) {//loops through the array
    if (arr[i] in result===true){//checks if result has property 
      if (result[arr[i]] >= 1) {//if value of property greater tha 1 it adds i to the property
        result[arr[i]]++;
      } else { // checks for properties that exist on the object prototype
        result[arr[i]] = 1;
      }
    } else { // adds value to object prototype 
      result[arr[i]] = 1;
    }
  }
  return result;
}
