function solution(a, b) {
  // me
  // let answer = [];
  // for (let i = 0; i < a.length; i++) {
  //   if (isVictoryA(a[i], b[i]) === 'a') answer.push('A');
  //   if (isVictoryA(a[i], b[i]) === 'b') answer.push('B');
  //   if (isVictoryA(a[i], b[i]) === 'd') answer.push('D');
  // }

  // return answer;

  let answer = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += 'D ';
    else if (a[i] === 1 && b[i] === 3) answer += 'A ';
    else if (a[i] === 2 && b[i] === 1) answer += 'A ';
    else if (a[i] === 3 && b[i] === 2) answer += 'A ';
    else answer += 'B ';
  }

  return answer;
}

// function isVictoryA(a, b) {
//   if (a === b) return 'd';
//   if (a === 1) {
//     return b === 2 ? 'b' : 'a';
//   }
//   if (a === 2) {
//     return b === 3 ? 'b' : 'a';
//   }
//   if (a === 3) {
//     return b === 1 ? 'b' : 'a';
//   }
// }

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
