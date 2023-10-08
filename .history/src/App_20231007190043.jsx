import { useState } from "react";
import "./index.css";

const TURNS = {
  x: "x",
  o: "o",
};

const COMBINATIONS = [
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

  const checkWinner = () => {};

  const updateBoard = (index) => {
    const newBoard = [...board];

    if (newBoard[index]) return;
    newBoard[index] = turn ? "x" : "o";
    setTurn(!turn);
    setBoard(newBoard);

    newBoard.forEach((_, index) => {
      index;
    });

    if (!newBoard.includes(null)) {
      alert("Game over");
      setBoard(initialState);
      return;
    }
  };

  const Square = ({ children, updateBoard, index }) => {
    return (
      <div onClick={() => updateBoard(index)} className="square">
        {board[index]}
        {index}
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
    </main>
  );
}

export default App;
