function solution(n, m) {
  // me
  let answer = 0;
  let tmp = Array.from({ length: m }, () => 0);
  function dfs(l, s) {
    if (l === m) {
      console.log(tmp);
      answer++;
      return;
    }
    for (let i = s; i <= n; i++) {
      tmp[l] = i;
      dfs(l + 1, i + 1);
    }
  }
  dfs(0, 1);
  return answer;
}

console.log(solution(4, 2));
