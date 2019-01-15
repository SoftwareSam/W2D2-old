// take string
// iterate through string
// change characters / a = 4 / e = 3 / o = 0 / l = 1
// return new string

var args = [...process.argv[2]];

for(var i = 0; i < args.length; i++){
  if(args[i] === "a"){
    args[i] = "4";
  }
  if(args[i] === "e"){
    args[i] = "3";
  }
  if(args[i] === "o"){
    args[i] = "0";
  }
  if(args[i] === "l"){
    args[i] = "1";
  }
}
console.log(args.join(""));

// var output = args.split(" ");


// for(var i = 0; i < args.length; i++){
//   if()
// }