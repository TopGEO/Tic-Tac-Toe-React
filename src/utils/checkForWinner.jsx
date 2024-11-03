export default function checkForWinner(board, players) {
  const checkLine = (a, b, c) => (a !== null && a === b && b === c) ? players[a] : null;

  // Check rows and columns
  for (let i = 0; i < 3; i++) {
      const rowResult = checkLine(board[i][0], board[i][1], board[i][2]);
      if (rowResult) return rowResult;

      const colResult = checkLine(board[0][i], board[1][i], board[2][i]);
      if (colResult) return colResult;
  }

  // Check diagonals
  const diag1Result = checkLine(board[0][0], board[1][1], board[2][2]);
  if (diag1Result) return diag1Result;

  const diag2Result = checkLine(board[0][2], board[1][1], board[2][0]);
  if (diag2Result) return diag2Result;

  return null; // No winner found
}
