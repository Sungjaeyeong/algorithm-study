function solution(s) {
  // me
  let answer = '';
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      if (count > 1) answer += s[i] + count;
      else answer += s[i];
      count = 1;
    } else {
      count++;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
