export const checkWinner = (board) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
};
