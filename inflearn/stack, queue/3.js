function solution(board, moves) {
  // me
  // let answer = 0;
  // let stack = [];
  // for (let move of moves) {
  //   let i = 0;
  //   while (board.length > i) {
  //     if (board[i][move - 1] !== 0) {
  //       if (stack[stack.length - 1] && stack[stack.length - 1] === board[i][move - 1]) {
  //         stack.pop();
  //         answer++;
  //       } else {
  //         stack.push(board[i][move - 1]);
  //       }
  //       board[i][move - 1] = 0;
  //       break;
  //     } else {
  //       i++;
  //     }
  //   }
  // }
  // return answer * 2;

  let answer = 0;
  let stack = [];
  moves.forEach(pos => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
