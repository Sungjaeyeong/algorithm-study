function solution(s) {
  // me
  // s = s.toUpperCase();
  // for (let i = 0; i < s.length / 2; i++) {
  //   let num1 = s[i].charCodeAt();
  //   let num2 = s[s.length - i - 1].charCodeAt();
  //   if (num1 >= 65 && num1 <= 90 && num2 >= 65 && num2 <= 90 && num1 !== num2) return 'NO';
  // }
  // return 'YES';

  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
