function solution(need, plan) {
  // me
  // need = need.split('');
  // plan = plan.split('');
  // let n = plan.length;
  // for (let i = n - 1; i >= 0; i--) {
  //   if (need.includes(plan[i])) {
  //     if (plan[i] === need[need.length - 1]) {
  //       need.pop();
  //     } else {
  //       return 'NO';
  //     }
  //   }
  // }
  // return 'YES';

  let answer = 'YES';
  let queue = need.split('');
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO';
    }
  }
  if (queue.length > 0) return 'NO';
  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
