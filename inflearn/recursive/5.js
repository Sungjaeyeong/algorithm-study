function solution(arr) {
  // me
  // let answer = 'NO';
  // let ch = Array.from({ length: arr.length }, () => 0);
  // function dfs(i) {
  //   if (answer === 'YES') return;
  //   if (i === arr.length) {
  //     let a = 0;
  //     let b = 0;
  //     for (let j = 0; j < ch.length; j++) {
  //       if (ch[j] === 1) {
  //         a = a + arr[j];
  //       } else {
  //         b = b + arr[j];
  //       }
  //     }
  //     console.log(a, ':', b);
  //     if (a === b) {
  //       answer = 'YES';
  //     }
  //     return;
  //   }
  //   ch[i] = 1;
  //   dfs(i + 1);
  //   ch[i] = 0;
  //   dfs(i + 1);
  // }

  // dfs(0);
  // return answer;
  let answer = 'NO',
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
