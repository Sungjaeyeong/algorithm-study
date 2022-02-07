function solution(meeting) {
  // me
  // let answer = 1;
  // meeting.sort((a, b) => a[0] - b[0]);
  // for (let i = 0; i < meeting.length; i++) {
  //   let count = 1;
  //   let now = meeting[i][1];
  //   for (let j = i + 1; j < meeting.length; j++) {
  //     if (meeting[j][0] >= now) {
  //       count++;
  //       now = meeting[j][1];
  //     }
  //   }
  //   if (count > answer) answer = count;
  // }
  // return answer;

  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

let arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
