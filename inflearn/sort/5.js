function solution(size, arr) {
  // me
  // let cache = new Array(size).fill(0);
  // for (let el of arr) {
  //   if (cache.includes(el)) {
  //     let idx = cache.indexOf(el);
  //     while (idx > 0) {
  //       [cache[idx], cache[idx - 1]] = [cache[idx - 1], cache[idx]];
  //       idx--;
  //     }
  //   } else {
  //     cache.unshift(el);
  //     cache.pop();
  //   }
  // }
  // return cache;

  let answer = Array.from({ length: size }, () => 0);
  arr.forEach(x => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
