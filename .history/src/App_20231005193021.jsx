import { useState } from "react";
import "./index.css";

const TURNS = {
  x: "x",
  o: "o",
};

function App() {
  const initialState = Array(9).fill(null);
  const [board, setBoard] = useState(initialState);
  const [turn, setTurn] = useState(true);

  const SetPoint = (index) => {
    if (!board.includes(null)) {
      alert("Game over");
      setBoard(initialState);
      return;
    }
    console.log(board[index]);
    if (board[index] !== "null") {
      board[index] = turn ? "x" : "o";
      setTurn(!turn);
    }
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
