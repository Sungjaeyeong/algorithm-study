function solution(m, songs) {
  // me
  let answer;
  let a = Math.max(...songs);
  let b = songs.reduce((a, c) => a + c, 0);
  while (a <= b) {
    let mid = Math.floor((a + b) / 2);
    let count = 1;
    let sum = 0;
    for (let i = 0; i < songs.length; i++) {
      if (sum + songs[i] > mid) {
        count++;
        sum = songs[i];
      } else {
        sum += songs[i];
      }
    }
    if (count <= m) {
      answer = mid;
      b = mid - 1;
    } else {
      a = mid + 1;
    }
  }
  return answer;
}

// function count(songs, capacity) {
//   let cnt = 1,
//     sum = 0;
//   for (let x of songs) {
//     if (sum + x > capacity) {
//       cnt++;
//       sum = x;
//     } else sum += x;
//   }
//   return cnt;
// }

// function solution(m, songs) {
//   let answer;
//   let lt = Math.max(...songs);
//   let rt = songs.reduce((a, b) => a + b, 0);
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (count(songs, mid) <= m) {
//       answer = mid;
//       rt = mid - 1;
//     } else {
//       lt = mid + 1;
//     }
//   }
//   return answer;
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
