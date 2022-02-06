function solution(arr) {
  // me
  let answer = [];
  let sorted = [...arr];
  // let sorted = arr.slice();
  sorted.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sorted[i]) answer.push(i + 1);
  }
  return answer;
}

let arr = [122, 123, 125, 125, 128, 161, 167, 167, 167, 161, 170];
console.log(solution(arr));
