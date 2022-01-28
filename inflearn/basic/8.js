function solution(arr) {
  // 내 풀이
  let sum = arr.reduce((a, c) => a + c, 0);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let a = arr[i];
      let b = arr[j];
      if (sum - a - b === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
