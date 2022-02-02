// Hash Map
function solution(s) {
  // me
  // let obj = {};
  // for (let i = 0; i < s.length; i++) {
  //   if (!obj[str[i]]) {
  //     obj[str[i]] = 1;
  //   } else {
  //     obj[str[i]]++;
  //   }
  // }
  // let arr = Object.entries(obj);
  // arr.sort((a, b) => b[1] - a[1]);
  // return arr[0][0];

  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
