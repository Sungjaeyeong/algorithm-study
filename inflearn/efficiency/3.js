// 투 포인터
function solution(m, arr) {
  // me
  let answer = 0;
  let start = 0;
  let end = 1;
  let sum = arr[0];
  while (start <= arr.length - 1) {
    if (sum === m) {
      answer++;
      sum += arr[end];
      end++;
    } else if (sum < m && end <= arr.length) {
      sum += arr[end];
      end++;
    } else {
      sum -= arr[start];
      start++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
