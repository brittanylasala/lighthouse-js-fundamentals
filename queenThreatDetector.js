let whiteQueen = [0, 0];
let blackQueen = [1, 1];
let generateBoard = function(whiteQueen, blackQueen) {
  let board = [];
  for (let i = 1; i < 9; i++) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0]);
  };
  board[whiteQueen[0]].splice(whiteQueen[1], 1, 1);
  board[blackQueen[0]].splice(blackQueen[1], 1, 1);
  return board;
};
let queenThreat = function(generateBoard) {
  if (whiteQueen[0] === blackQueen[0]) {
    return true;
  } else if (whiteQueen[1] === blackQueen[1]) {
    return true;
  } else if (blackQueen[1] - (blackQueen[0] - whiteQueen[0]) === whiteQueen[1]) {
    return true;
  } else if (blackQueen[1] + (blackQueen[0] - whiteQueen[0]) === whiteQueen[1]) {
    return true;
  } else {
    return false;
  }
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));