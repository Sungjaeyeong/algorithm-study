function solution(s) {
  // me
  let max = 0;
  let answer;
  for (let el of s) {
    if (el.length > max) {
      max = el.length;
      answer = el;
    }
  }
  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
