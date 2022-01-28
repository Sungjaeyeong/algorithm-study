function solution(s) {
  // me
  // let answer = 0;
  // for (let el of s) {
  //   if (el === el.toUpperCase()) answer++;
  // }
  // return answer;

  let answer = 0;
  for (let el of s) {
    let num = el.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
