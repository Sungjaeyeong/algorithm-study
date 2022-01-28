function solution(s, t) {
  // me
  let answer = 0;
  for (let el of s) {
    if (el === t) answer++;
  }
  return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
