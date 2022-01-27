function solution(a, b, c) {
  // 내 풀이
  let max;
  let sum = a + b + c;
  if (a < b) max = b;
  else max = a;
  if (max < c) max = c;

  if (sum - max > max) return 'YES';
  else return 'NO';
}

console.log(solution(13, 33, 17));
