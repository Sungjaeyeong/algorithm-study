function solution(n, r) {
  // me
  // let answer;
  // function dfs(n, r) {
  //   if (n === r) {
  //     return 1;
  //   }
  //   if (r === 1) {
  //     return n;
  //   }
  //   return dfs(n - 1, r - 1) + dfs(n - 1, r);
  // }
  // answer = dfs(n, r);
  // return answer;
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
