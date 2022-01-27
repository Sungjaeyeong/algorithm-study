function solution(a, b, c) {
  // 내 풀이
  // let min = 100;
  // if (a < min) min = a;
  // if (b < min) min = b;
  // if (c < min) min = c;
  // return min;
  // 풀이
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(6, 5, 11));
