// http://ejohn.org/apps/learn/#55
// What are the values of the variables?
var a = 5;
function runMe(a){
 //assert( a == ? (6), "Check the value of a." );
 console.log(a);  //6
    
 function innerRun(){
   //assert( b == 7, "Check the value of b." );
   console.log(b);
   //assert( c == null, "Check the value of c." );
   console.log(c);
 }

 var b = 7;
 innerRun();
 var c = 8;
}
runMe(6);

for ( var d = 0; d < 3; d++ ) {
 setTimeout(function(){
   //assert( d == 3, "Check the value of d." );
   console.log(d);
 }, 100);
}

for ( var d = 0; d < 3; d++ ) {
 var count = d;
 (function(count){
   setTimeout(function(){
     //assert( d == ?, "Check the value of d." );
     console.log(count); //
   }, 100);
 })(count);
}