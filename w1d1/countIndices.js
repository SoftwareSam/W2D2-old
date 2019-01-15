function countIndices(str) {

var result = {};


let input = str.split(" ").join("").toLowerCase();

for(var i = 0; i < input.length; i++){
  current = input[i];

  if(result[current] === undefined){
    result[current] = [i];
  }
  else result[current].push(i);

}
console.log(result);

}

countIndices("lighthouse in the house");

