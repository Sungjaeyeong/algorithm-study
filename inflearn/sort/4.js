function solution(arr) {
  // me
  // for (let i = 1; i < arr.length; i++) {
  //   let idx = 1;
  //   let j = i;
  //   while (i - idx >= 0 && arr[j] < arr[i - idx]) {
  //     [arr[j], arr[i - idx]] = [arr[i - idx], arr[j]];
  //     idx++;
  //     j--;
  //   }
  // }
  // return arr;

  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
