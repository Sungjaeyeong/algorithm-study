// Hash Map
function solution(str1, str2) {
  // me
  // let obj1 = {};
  // let obj2 = {};
  // for (let i = 0; i < str1.length; i++) {
  //   if (!obj1[str1[i]]) {
  //     obj1[str1[i]] = 1;
  //   } else {
  //     obj1[str1[i]]++;
  //   }
  // }
  // for (let i = 0; i < str2.length; i++) {
  //   if (!obj2[str2[i]]) {
  //     obj2[str2[i]] = 1;
  //   } else {
  //     obj2[str2[i]]++;
  //   }
  // }
  // for (let key in obj1) {
  //   if (obj1[key] !== obj2[key]) return 'No';
  // }
  // return 'YES';

  let answer = 'YES';
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let a = 'abaCC';
let b = 'Caaab';
console.log(solution(a, b));
