function hello (val){
  if(typeof val == 'object')
  val = 'hello';
  return typeof val;
console.log(hello)
};


console.log((3,2,'he'))

