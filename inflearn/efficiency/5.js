// Sliding Window
function solution(k, arr) {
  // me
  let answer = 0;
  let sum;
  for (let i = 0; i < k; i++) {
    answer += arr[i];
  }
  sum = answer;
  for (let i = 1; i < arr.length - (k + 1); i++) {
    sum = sum + arr[i + 2] - arr[i - 1];
    if (sum > answer) answer = sum;
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
