import { useState } from "react";
import "./index.css";
import confetti from "canvas-confetti";
import { ALL_TURNS, WINNER_COMBOS } from "./constants";
import Modal from "./Modal";
import { checkWinner } from "./boardLogic";

function App() {
  const initialState = Array(9).fill(null);
  const initialStateTurn =
    ALL_TURNS[Math.floor(Math.random() * ALL_TURNS.length)];
  const [board, setBoard] = useState(initialState);
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [randomTurn, setRandomTurn] = useState(initialStateTurn);

  const restartGame = () => {
    setBoard(initialState);
    setWinner(null);
    setRandomTurn(initialStateTurn);
  };

  const updateBoard = (index) => {
    const newBoard = [...board];

    if (newBoard[index] || winner) return;
    newBoard[index] = turn ? randomTurn[0] : randomTurn[1];
    setTurn(!turn);
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (!newBoard.includes(null)) {
      setWinner(false);
    }
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
