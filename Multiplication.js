function multiMax(multi){
  // Make an array of all but the first argument
  var allButFirst = Array().splice.call(arguments, 0);

  // Find the largest number in that array of arguments
  var largestAllButFirst = Math.max.apply(null, allButFirst );

  // Return the multiplied result
  return multi * largestAllButFirst;
}

console.log(multiMax(3, 1, 2, 3));