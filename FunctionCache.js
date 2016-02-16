function getElements( name ) { 
  if ( typeof getElements.cache[name] !== 'undefined') { 
    console.log( "Elements found");
    getElements.cache[name] = getElements.cache[name] + 1; 
  } else { 
    console.log( "Elements not found");
    getElements.cache[name] = 0; 
  } 
 
  return getElements.cache[name]; 
} 
getElements.cache = {}; 
 
console.log(getElements("pre")); 
console.log(getElements("pre")); 
console.log(getElements("pre")); 

// Can you cache the results of this function?
function isPrime( num ) {
  var prime = num != 1; // Everything but 1 can be prime
  if(typeof isPrime.cache[num] === 'undefined'){
    for ( var i = 2; i < num; i++ ) {
      if ( num % i == 0 ) {
        prime = false;
        break;
      }
    }
    isPrime.cache[num] = prime;
  }else{
    prime = isPrime.cache[num];
  }
  return prime;
}

isPrime.cache = {};

assert( isPrime(5), "Make sure the function works, 5 is prime." );
assert( isPrime.cache[5], "Is the answer cached?" );
