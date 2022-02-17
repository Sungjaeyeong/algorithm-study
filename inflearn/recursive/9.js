function solution(m, arr) {
  // me
  arr.sort((a, b) => b - a);
  let answer = Number.MAX_SAFE_INTEGER;
  function dfs(L, sum) {
    if (L >= answer) return;
    if (sum > m) return;
    if (sum === m) {
      answer = Math.min(answer, L);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      dfs(L + 1, sum + arr[i]);
    }
  }
  dfs(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
