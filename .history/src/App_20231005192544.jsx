import { useState } from "react";
import "./index.css";

const TURNS = {
  x: "x",
  o: "o",
};

function App() {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));

  const SetPoint = (index) => {
    if (!board.includes(null)) {
      alert("Game over");
      setBoard(Array(9).fill(null));
      console.log(board);
      return;
    }

    board[index] = turn ? "x" : "o";
    console.log(board[index]);

    setTurn(!turn);
  };

  const Square = ({ children, updateBoard, index }) => {
    return (
      <div onClick={() => SetPoint(index)} className="square">
        {board[index]}
      </div>
    );
  };
  return (
    <main className="board">
      <h1>Tic-Tac-Toe 🎮</h1>
      <section className="game">
        {board.map((_, index) => {
          return <Square key={index} index={index}></Square>;
        })}
      </section>
    </main>
  );
}

export default App;
