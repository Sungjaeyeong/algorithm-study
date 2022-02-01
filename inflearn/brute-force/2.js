function solution(arr) {
  // me
  let answer = [];
  arr = arr.map(el => Number(String(el).split('').reverse().join('')));
  for (let el of arr) {
    if (isPrime(el)) answer.push(el);
  }
  return answer;
}

function isPrime(num) {
  if (num > 1) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return false;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
