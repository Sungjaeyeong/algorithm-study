function solution(s) {
  // me
  // let answer = '';
  // let stack = [];
  // for (let el of s) {
  //   if (el === '(') {
  //     stack.push(el);
  //   } else if (el === ')') {
  //     stack.pop();
  //   } else {
  //     if (stack.length === 0) {
  //       answer += el;
  //     }
  //   }
  // }
  // return answer;

  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  answer = stack.join('');
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
