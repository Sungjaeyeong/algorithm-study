function solution(s) {
  // me
  // let stack = [];
  // for (let el of s) {
  //   if (isNaN(el)) {
  //     let b = +stack.pop();
  //     let a = +stack.pop();
  //     if (el === '+') {
  //       stack.push(a + b);
  //     }
  //     if (el === '-') {
  //       stack.push(a - b);
  //     }
  //     if (el === '*') {
  //       stack.push(a * b);
  //     }
  //     if (el === '/') {
  //       stack.push(a / b);
  //     }
  //   } else {
  //     stack.push(el);
  //   }
  // }
  // return stack[0];

  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
