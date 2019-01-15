function countLetters(str) {

var result = {};

let input = str.split(" ").join("").toLowerCase();

for(var i = 0; i < str.length; i++){
  let current = input[i];

  if(result[current]){
    result[current]++;
  } else {
    result[current] = 1;
  }
}
console.log(result);

}

countLetters("lighthouse in the house");