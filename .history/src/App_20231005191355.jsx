import { useState } from "react";
import "./index.css";

const TURNS = {
  x: "x",
  o: "o",
};

const board = Array(9).fill(0);

function App() {
  const [turn, setTurn] = useState(true);

  const SetPoint = (index) => {
    console.log(board[index]);
    board[index] = turn ? "x" : "o";
    setTurn(!turn);
  };

  const Square = ({ children, updateBoard, index }) => {
    return (
      <div onClick={() => SetPoint(index)} className="square">
        {turn}
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
