// const data = require("./module/cb");
// console.dir(data);

// import a from "./module/cb";
// console.dir(a);

function six(number, append){
  return number + append;
}
function seven(number, append){
  return number - append;
}
function eight(number, append, callback){
  let a = number + 1;
  let b = append + 2;
  return callback(a, b); // 연산이 끝난 다음에 알고리즘을 쓰고 싶을 때, 동기방식
} //인자를 전달받는다.

const a = seven(1234,2); // 데이터가 변한다.
console.log(a);

console.log(eight(1,2,function(a,b){
  return a + b
}))

console.log(eight(1,2,seven)); //seven은 인자를 어떻게 알았을 까? 전달받았기 때문