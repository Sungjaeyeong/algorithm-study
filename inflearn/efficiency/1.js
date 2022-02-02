// 투 포인터
function solution(arr1, arr2) {
  // me
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }
  if (p1 < arr1.length) {
    answer = answer.concat(arr1.slice(p1));
  } else {
    answer = answer.concat(arr2.slice(p2));
  }
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
