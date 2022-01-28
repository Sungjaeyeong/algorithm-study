function solution(s) {
  // me
  let answer = '';
  for (let el of s) {
    if (el === el.toUpperCase()) {
      answer += el.toLowerCase();
    } else {
      answer += el.toUpperCase();
    }
  }
  return answer;
}

console.log(solution('StuDY'));
