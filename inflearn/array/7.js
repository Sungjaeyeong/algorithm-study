function solution(arr) {
  let answer = 0;
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx < 0 || nx >= arr.length || ny < 0 || ny >= arr.length) {
        } else {
          if (arr[nx][ny] >= arr[i][j]) break;
        }
        if (k === 3) {
          answer++;
        }
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
