import { useState } from "react";
import "./index.css";
import confetti from "canvas-confetti";
const TURNS = {
  x: "x",
  o: "o",
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const initialState = Array(9).fill(null);
  const [board, setBoard] = useState(initialState);
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const restartGame = () => {
    setBoard(initialState);
    setWinner(null);
  };

  const checkWinner = (board) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const updateBoard = (index) => {
    const newBoard = [...board];

    if (newBoard[index] || winner) return;
    newBoard[index] = turn ? TURNS["x"] : TURNS["o"];
    setTurn(!turn);
    setBoard(newBoard);

    newBoard.forEach((_, index) => index);

    if (!newBoard.includes(null)) {
    }
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (!newBoard.includes(null)) {
      setWinner(false);
    }
  };

  const Square = ({ children, updateBoard, index }) => {
    return (
      <div onClick={() => updateBoard(index)} className="square">
        {board[index]}
      </div>
    );
  };
  return (
    <main className="board">
      <h1>Tic-Tac-Toe 🎮</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            ></Square>
          );
        })}
      </section>
      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner ? "Won" : "Tieee :("}</h2>
            {winner && (
              <div className="win">
                <Square> {`${winner}!!`}</Square>
              </div>
            )}
            <button className="win" onClick={restartGame}>
              Start again
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
