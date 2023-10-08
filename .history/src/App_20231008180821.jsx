import { useState } from "react";
import "./index.css";
import { ALL_TURNS, WINNER_COMBOS } from "./constants";
import Modal from "./Modal";
import { checkWinner, updateBoard } from "./boardLogic";

function App() {
  const initialState = Array(9).fill(null);
  const initialStateTurn =
    ALL_TURNS[Math.floor(Math.random() * ALL_TURNS.length)];
  const [board, setBoard] = useState(initialState);
  const [winner, setWinner] = useState(null);
  const [randomTurn, setRandomTurn] = useState(initialStateTurn);

  const restartGame = () => {
    setBoard(initialState);
    setWinner(null);
    setRandomTurn(initialStateTurn);
  };

  const Square = ({ children, updateBoard, index }) => {
    return (
      <div onClick={() => updateBoard(index)} className="square">
        {children}
      </div>
    );
  };

  return (
    <main className="board">
      <h1>Tic-Tac-Toe 🎮</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <Modal restartGame={restartGame} winner={winner} />
    </main>
  );
}

export default App;
