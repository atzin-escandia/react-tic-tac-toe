import { useState } from "react";
import "./index.css";

const TURNS = {
  x: "x",
  o: "o",
};

const board = Array(9).fill("");

function App() {
  const [turn, setTurn] = useState(true);

  const SetPoint = (index) => {
    board[index] = turn ? "x" : "o";
    console.log(board[index]);

    setTurn(!turn);
  };

  const Square = ({ children, updateBoard, index }) => {
    return (
      <div onClick={() => SetPoint(index)} className="square">
        {console.log(turn);}
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
