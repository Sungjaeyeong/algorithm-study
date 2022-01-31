function solution(s, t) {
  // me
  // let answer = '';
  // for (let i = 0; i < s.length; i++) {
  //   let distance = 0;
  //   for (let j = 0; j < s.length; j++) {
  //     if (s[i - j] === t || s[i + j] === t) {
  //       distance = j;
  //       break;
  //     }
  //   }
  //   answer += distance;
  // }
  // return answer;
  let answer = [];
  let p = 10000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
