function solution(day, arr) {
  // 내 풀이
  let count = 0;
  for (let el of arr) {
    if (el % 10 === day) count++;
  }
  return count;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
