import { useState } from "react";
import "./index.css";

const TURNS = {
  x: "x",
  o: "o",
};

const COMBINATIONS = {
  0: [1, 2, 3],
  1: [1, 4, 7],
  2: [2, 5, 8],
  3: [3, 6, 9],
  4: [1, 5, 9],
};

function App() {
  const initialState = Array(9).fill(null);
  const [board, setBoard] = useState(initialState);
  const [turn, setTurn] = useState(true);

  const updateBoard = (index) => {
    const newBoard = [...board];

    // if (!newBoard.includes(null)) {
    //   alert("Game over");
    //   setBoard(initialState);
    //   return;
    // }
    console.log(newBoard[index], board, index);

    if (newBoard[index] === null) {
      newBoard[index] = turn ? "x" : "o";
      setTurn(!turn);
    }

    newBoard.forEach((_, index) => {
      index;
    });
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
    </main>
  );
}

export default App;
