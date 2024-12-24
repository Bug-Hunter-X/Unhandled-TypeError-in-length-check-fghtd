function foo(x){
  if(x === null || x === undefined || !Array.isArray(x)){
    return 0; 
  }
  return x.length;
}

console.log(foo(null)); //0
console.log(foo(undefined)); //0
console.log(foo([1,2,3])); //3
console.log(foo({})); //0