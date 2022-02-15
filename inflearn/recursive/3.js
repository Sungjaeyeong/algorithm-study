function solution(n) {
  if (n > 7) return;
  console.log(n);
  solution(n * 2);
  solution(n * 2 + 1);
}

console.log(solution(1));
