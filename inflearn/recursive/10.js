function solution(m, arr) {
  // me
  // let answer = [];
  // let tmp = Array.from({ length: m }, () => 0);
  // function dfs(L) {
  //   if (L === m) {
  //     answer.push(tmp.slice());
  //     tmp[m - 1] = 0;
  //     return;
  //   } else {
  //     for (let i = 0; i < arr.length; i++) {
  //       if (tmp.includes(arr[i])) continue;
  //       tmp[L] = arr[i];
  //       dfs(L + 1);
  //     }
  //   }
  // }

  // dfs(0);
  // return answer;
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9, 5];
console.log(solution(2, arr));
