import { useState } from "react";
import "./index.css";

const [position, setPoint] = useState();

const TURNS = {
  x: "x",
  o: "o",
};

const board = Array(9).fill(null);

const Square = ({ children, updateBoard, index }) => {
  return (
    <div onClick={setPoint} className="square">
      index
      {children}
    </div>
  );
};

function App() {
  return (
    <main className="board">
      <h1>Tic-Tac-Toe 🎮</h1>
      <section className="game">
        {board.map((_, index) => {
          return <Square key={index} index></Square>;
        })}
      </section>
    </main>
  );
}

export default App;
