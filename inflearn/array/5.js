function solution(arr) {
  // me
  // arr = arr.map((el, i) => [el, i]);
  // let sorted = arr.sort((a, b) => b[0] - a[0]);
  // console.log(sorted);
  // sorted[0].push(1);
  // for (let i = 1; i < sorted.length; i++) {
  //   if (sorted[i][0] === sorted[i - 1][0]) {
  //     sorted[i].push(sorted[i - 1][2]);
  //   } else {
  //     sorted[i].push(sorted[i - 1][2] + 1);
  //   }
  // }
  // console.log(sorted);
  // let answer = sorted.sort((a, b) => a[1] - b[1]);
  // return answer.map(el => el[2]);

  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
}

let arr = [87, 89, 92, 92, 92, 100, 76];
console.log(solution(arr));
