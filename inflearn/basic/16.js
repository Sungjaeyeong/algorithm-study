function solution(s) {
  // me
  let answer = '';
  for (let el of s) {
    if (!answer.includes(el)) answer += el;
  }
  return answer;
}
console.log(solution('ksekkset'));
