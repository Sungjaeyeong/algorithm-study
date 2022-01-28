function solution(num, nodes) {
  let arr = nodes.split('\n').map(el => el.split(' ').map(el => +el));
  // console.log(arr);

  let obj = [];
  for (let i = 0; i < num + 1; i++) {
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

  let visit = new Array(num + 1).fill(0);
  // console.log(visit);

  let count = -1;

  dfs(1);

  function dfs(node) {
    count++;
    visit[node] = 1;
    for (let i = 0; i < obj[node].length; i++) {
      if (visit[obj[node][i]] === 1) continue;
      dfs(obj[node][i]);
    }
  }

  console.log(count);
}

solution(
  7,
  `1 2
2 3
1 5
5 2
5 6
4 7`
);
