// 백준 1260
// 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.
function solution(n, m, v, lines) {
  let arr = lines.split('\n').map(el => el.split(' ').map(el => +el));
  // console.log(arr);

  let visit = new Array(n + 1).fill(0);
  // console.log(visit);

  let obj = [];
  for (let i = 0; i < n + 1; i++) {
    obj.push([]);
  }
  // console.log(obj);

  arr.forEach(el => {
    if (!obj[el[0]].includes(el[1])) {
      obj[el[0]].push(el[1]);
    }
    if (!obj[el[1]].includes(el[0])) {
      obj[el[1]].push(el[0]);
    }
  });
  // console.log(obj);

  return dfs(v);

  function dfs(start) {
    console.log(start);
    visit[start] = 1;
    for (let i = 0; i < obj[start].length; i++) {
      if (visit[obj[start][i]] === 0) {
        dfs(obj[start][i], visit);
      }
    }
  }
}

solution(
  5,
  5,
  3,
  `5 4
5 2
1 2
3 4
3 1`
);
