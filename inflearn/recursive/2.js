function solution(n) {
  if (n === 0) return;
  solution(Math.floor(n / 2));
  console.log(n % 2);
}

console.log(solution(11));
