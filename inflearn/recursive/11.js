function solution(n) {
  // me
  let answer = 1;
  function dfs(L) {
    if (L === 0) {
      return;
    }
    answer *= L;
    dfs(L - 1);
  }
  dfs(n);
  return answer;
}

console.log(solution(6));
