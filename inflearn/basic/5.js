function solution(arr) {
  // 내 풀이
  // return arr.sort((a, b) => a - b)[0];

  // 풀이
  // let answer;
  // let min = Number.MAX_SAFE_INTEGER;
  // for (let i = 0; i <= arr.length; i++) {
  //   if (arr[i] < min) min = arr[i];
  // }
  // answer = min;
  // return answer;

  return Math.min(...arr);
}

let arr = [5, 7, 3, 2, 9, 11];
console.log(solution(arr));
