//http://ejohn.org/apps/learn/#58
//Self-executing, temporary, function
(function(){
  var count = 0;

  var timer = setInterval(function(){
    if ( count < 5 ) {
      log( "Timer call: ", count );
      count++;
    } else {
      assert( count == 5, "Count came via a closure, accessed each step." );
      assert( timer, "The timer reference is also via a closure." );
      clearInterval( timer );
    }
  }, 100);
})();

assert( typeof count == "undefined", "count doesn't exist outside the wrapper" );
assert( typeof timer == "undefined", "neither does timer" );