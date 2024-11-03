export default function checkForWinner(board, players) {
    // Check rows for winner
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== null) {
        return players[board[i][0]];  // Return the winner ('X' or 'O')
      }
    }
  
    // Check columns for winner
    for (let j = 0; j < 3; j++) {
      if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== null) {
        return players[board[0][j]];
      }
    }
  
    // Check diagonals for winner
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null) {
      return players[board[0][0]];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null) {
      return players[board[0][2]];
    }
  
    return null;
  }