import { useState } from "react";
import "./index.css";

const TURNS = {
  x: "x",
  o: "o",
};

const board = Array(9).fill(null);

const SetPoint = (index) => {
  const [turn, setTurn] = useState(true);

  console.log(index);
  board[index] = turn ? TURNS["x"] : TURNS["o"];
  setTurn(!turn);
};

const Square = ({ children, updateBoard, index }) => {
  return (
    <div onClick={() => SetPoint(index)} className="square">
      {turn}
    </div>
  );
};

function App() {
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
