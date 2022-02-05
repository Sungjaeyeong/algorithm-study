function solution(n, k) {
  // me
  // let queue = [];
  // let count = 0;
  // for (let i = 1; i <= n; i++) {
  //   queue.push(i);
  // }
  // while (queue.length > 1) {
  //   count++;
  //   let dequeue = queue.shift();
  //   if (count % k !== 0) {
  //     queue.push(dequeue);
  //   }
  // }
  // return queue[0];

  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
