function solution(n) {
  // 내 풀이
  // return (n * (n + 1)) / 2;

  // 풀이
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }
  return answer;
}

console.log(solution(10));
