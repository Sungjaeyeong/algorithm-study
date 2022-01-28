function solution(arr) {
  // 내 풀이
  // arr = arr.filter(el => el % 2 === 1);
  // let min = arr.sort((a, b) => a - b)[0];
  // let sum = arr.reduce((a, c) => a + c, 0);
  // return [min, sum];

  // 풀이
  let answer = [];
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
