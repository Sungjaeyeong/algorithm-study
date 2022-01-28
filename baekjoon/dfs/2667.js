function solution(n, str) {
  let arr = str.split('\n');
  // console.log(arr);

  let visit = new Array(n).fill(0).map(el => new Array(n).fill(0));
  // console.table(visit);

  let count = 0;
  let result = [];
  let ic;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === '0' || visit[i][j] === 1) {
        continue;
      } else {
        count++;
        ic = 0;
        dfs(i, j);
        result.push(ic);
      }
    }
  }

  console.log(count, result);

  function dfs(x, y) {
    visit[x][y] = 1;
    ic++;

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx <= -1 || nx >= n || ny <= -1 || ny >= n) continue;
      if (visit[nx][ny] === 1 || arr[nx][ny] === '0') continue;
      dfs(nx, ny);
    }
  }
}

solution(
  7,
  `0110100
0110101
1110101
0000111
0100000
0111110
0111000`
);
