let players = ['X', 'O'];

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard(board);
  counter = 0;
};

function click(row, col) {
  console.log(row, col);
  if (counter % 2 == 0) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  };
  board[row][col] = players[activePlayer];
  renderBoard(board);
  checkWin();
  counter++;
}

function checkWin() {
  if (board[0][0] == "X" && board[0][1] == 'X' && board[0][2] == 'X' ||
    board[1][0] == "X" && board[1][1] == 'X' && board[1][2] == 'X' ||
    board[2][0] == "X" && board[2][1] == 'X' && board[2][2] == 'X' ||
    board[0][0] == "X" && board[1][0] == 'X' && board[2][0] == 'X' ||
    board[0][1] == "X" && board[1][1] == 'X' && board[2][1] == 'X' ||
    board[0][2] == "X" && board[1][2] == 'X' && board[2][2] == 'X' ||
    board[0][0] == "X" && board[1][1] == 'X' && board[2][2] == 'X' ||
    board[0][2] == "X" && board[1][1] == 'X' && board[2][0] == 'X') {
    showWinner('X');
  } else if (board[0][0] == "O" && board[0][1] == 'O' && board[0][2] == 'O' ||
    board[1][0] == "O" && board[1][1] == 'O' && board[1][2] == 'O' ||
    board[2][0] == "O" && board[2][1] == 'O' && board[2][2] == 'O' ||
    board[0][0] == "O" && board[1][0] == 'O' && board[2][0] == 'O' ||
    board[0][1] == "O" && board[1][1] == 'O' && board[2][1] == 'O' ||
    board[0][2] == "O" && board[1][2] == 'O' && board[2][2] == 'O' ||
    board[0][0] == "O" && board[1][1] == 'O' && board[2][2] == 'O' ||
    board[0][2] == "O" && board[1][1] == 'O' && board[2][0] == 'O') {
    showWinner('O');
  }
};











