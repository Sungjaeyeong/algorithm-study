function solution(s) {
  // me
  // let answer = [];
  // for (let el of s) {
  //   if (!answer.includes(el)) answer.push(el);
  // }
  // return answer;

  let answer;
  answer = s.filter((v, i) => {
    return s.indexOf(v) === i;
  });
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
