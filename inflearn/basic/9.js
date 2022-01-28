function solution(s) {
  // me
  // let arr = s.split('');
  // arr = arr.map(el => (el === 'A' ? '#' : el));
  // return arr.join('');

  let answer = s;
  answer = answer.replace(/A/g, '#');
  return answer;
}

let str = 'BANANA';
console.log(solution(str));
