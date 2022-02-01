function solution(m, product) {
  // me
  // 틀림
  // let answer = 0;
  // let budget = 0;
  // product.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
  // into();
  // product = product.map(el => [el[0] / 2, el[1]]);
  // product.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
  // into();
  // return answer;

  // function into() {
  //   while (budget < m) {
  //     let sum = product[product.length - 1][0] + product[product.length - 1][1];
  //     if (budget + sum <= m) {
  //       budget += sum;
  //       product.pop();
  //       answer++;
  //     } else {
  //       break;
  //     }
  //   }
  // }
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [8, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [12, 1],
];
console.log(solution(41, arr));
