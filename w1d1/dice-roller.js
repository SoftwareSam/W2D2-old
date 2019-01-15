var args = process.argv[2];

for(var i = 0; i < args; i++){
  console.log(Math.floor(Math.random() * 10));
}