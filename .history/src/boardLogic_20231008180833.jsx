import { useState } from "react";
import { WINNER_COMBOS } from "./constants";
import confetti from "canvas-confetti";

export const checkWinner = (board) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export const updateBoard = (index, board, winner) => {
  const [turn, setTurn] = useState(true);

  const newBoard = [...board];

  if (newBoard[index] || winner) return;
  newBoard[index] = turn ? randomTurn[0] : randomTurn[1];
  setTurn(!turn);
  setBoard(newBoard);

  const newWinner = checkWinner(newBoard);
  if (newWinner) {
    setWinner(newWinner);
    confetti();
  } else if (!newBoard.includes(null)) {
    setWinner(false);
  }
};
