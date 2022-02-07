function solution(target, arr) {
  // me
  arr.sort((a, b) => a - b);
  let answer = -1;
  let a = 0;
  let b = arr.length;
  while (b - a > 0) {
    let mid = Math.floor((a + b) / 2);
    if (arr[mid] === target) return mid + 1;
    if (arr[mid] > target) {
      b = mid;
    } else {
      a = mid;
    }
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
