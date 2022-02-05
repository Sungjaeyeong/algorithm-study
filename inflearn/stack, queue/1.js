function solution(s) {
  // me
  // let a = 0;
  // let b = 0;
  // for (let el of s) {
  //   if (el === '(') {
  //     a++;
  //   } else {
  //     b++;
  //   }
  // }
  // if (a === b) {
  //   return 'YES';
  // } else {
  //   return 'NO';
  // }

  let answer = 'YES';
  stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));
