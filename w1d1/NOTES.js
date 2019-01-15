// global variables
// functions are first class variables

var exposed = "This is visible everywhere";

var firstFunc = function(){
  var exposed = "hidden";
  console.log(exposed)
}

firstFunc();
console.log('Hidden?', exposed);