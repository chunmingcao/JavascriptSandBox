var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
console.log(y); 

var foo = "mine";
var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("this.foo = " + this.foo); // bar
    console.log("self.foo = " + self.foo); // bar
    (function() {
      console.log("this.foo = " + this.foo); // undefined
      console.log("self.foo = " + self.foo); // bar
    }());
  }
};
myObject.func();
var ff = myObject.func;
ff();