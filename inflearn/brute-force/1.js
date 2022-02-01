function solution(n, arr) {
  // me
  // let answer;
  // let max = 0;
  // let sum = arr.map(el => String(el).split('')).map(el => el.reduce((a, c) => a + Number(c), 0));
  // console.log(sum);
  // for (let i = 0; i < sum.length; i++) {
  //   if (sum[i] > max) {
  //     max = sum[i];
  //     answer = arr[i];
  //   }
  //   if (sum[i] === max) {
  //     if (arr[i] > answer) answer = arr[i];
  //   }
  // }
  // return answer;
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
