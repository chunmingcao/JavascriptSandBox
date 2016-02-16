//http://ejohn.org/apps/learn/#59
//handle closures and looping.
for ( var d = 0; d < 3; d++ ) (function(d){ 
 setTimeout(function(){ 
   log( "Value of d: ", d ); 
   assert( d == d, "Check the value of d." ); 
 }, d * 200); 
})(d);