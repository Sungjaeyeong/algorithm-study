function solution(n, k, card) {
  // me
  // let list = [];
  // card.sort((a, b) => b - a);

  // for (let i = 0; i < card.length - 2; i++) {
  //   for (let j = i + 1; j < card.length - 1; j++) {
  //     for (let l = j + 1; l < card.length; l++) {
  //       let sum = card[i] + card[j] + card[l];
  //       if (!list.includes(sum)) list.push(sum);
  //     }
  //   }
  // }
  // return list[k - 1];

  let answer;
  let tmp = new Set(); // 중복을 제거하는 자료구조
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a); // set구조는 배열이 아니라서 배열로 만들어줌.
  answer = a[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
