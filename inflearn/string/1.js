function solution(s) {
  // me
  s = s.toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    // if (s[i] !== s[s.length - i - 1]) return 'NO';
    if (s.split('').reverse().join('') !== s) return 'NO';
  }
  return 'YES';
}

let str = 'goooG';
console.log(solution(str));
