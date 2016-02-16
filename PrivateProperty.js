//Private properties, using closures.
function Ninja(){
    var slices = 0;
    this.getSlices = function(){
        return slices;
    }
    this.slice = function(){
        slice ++
    }
}
var ninja = new Ninja();
ninja.slice;
console.log(ninja.getSlices());
//the private data is inaccessible to us
console.log(ninja.slices);