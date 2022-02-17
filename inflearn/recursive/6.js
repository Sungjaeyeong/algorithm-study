function solution(c, arr) {
  // me
  let max = 0;
  function dfs(i, sum) {
    if (sum > c) return;
    if (i === arr.length) {
      if (sum > max) max = sum;
      return;
    }
    dfs(i + 1, sum + arr[i]);
    dfs(i + 1, sum);
  }
  dfs(0, 0);
  return max;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
