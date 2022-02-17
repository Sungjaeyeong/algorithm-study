function solution(m, ps, pt) {
  //me
  let answer = 0;
  function dfs(i, sumT, sumS) {
    if (sumT > m) return;
    if (i === ps.length) {
      if (sumS > answer) answer = sumS;
      return;
    }
    dfs(i + 1, sumT + pt[i], sumS + ps[i]);
    dfs(i + 1, sumT, sumS);
  }
  dfs(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
