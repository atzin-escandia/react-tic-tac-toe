import "./index.css";

const TURNS = {
  x: "x",
  o: "o",
};

const board = Array(9).fill(null);

const SetPoint = ({ index }) => {
  console.log(index);
  board[index] = "X";
};

const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{index}</div>;
};

function App() {
  return (
    <main className="board">
      <h1>Tic-Tac-Toe 🎮</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              onClick={SetPoint(index)}
            ></Square>
          );
        })}
      </section>
    </main>
  );
}

export default App;
