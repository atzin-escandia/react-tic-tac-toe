import "./App.css";

function App() {
  const turns = {
    x: "❌",
    o: "🤍",
  };

  const board = Array(9).fill(null);

  const Square = () => {};

  return (
    <main className="board">
      <h1>Tic-Tac-Toe 🎮</h1>
      <section className="game">
        {board.map((_, index) => {
          <Square key={index}></Square>;
        })}
      </section>
    </main>
  );
}

export default App;
