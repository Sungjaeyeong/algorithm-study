function solution(arr) {
  // me
  // let score = [];
  // if (arr[0] === 1) {
  //   score.push(1);
  // } else {
  //   score.push(0);
  // }
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] === 0) {
  //     score.push(0);
  //   } else {
  //     score.push(score[i - 1] + 1);
  //   }
  // }
  // return score.reduce((a, c) => a + c, 0);
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
