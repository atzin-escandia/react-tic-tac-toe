import { useState } from "react";
import "./index.css";

const TURNS = {
  x: "x",
  o: "o",
};

let board = Array(9).fill(null);

function App() {
  const [turn, setTurn] = useState(true);

  const SetPoint = (index) => {
    if (!board.includes(null)) {
      alert("Game over");
      board = Array(9).fill(null);
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
