// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);// this will take it as c val;ue is there then okay otherwise zero//
}

console.log(add(2,5))//this will give output 7
console/log(add(2,5,4)//This will give output zero
