import "./App.css";

function App() {
  const turns = {
    x: "❌",
    o: "🤍",
  };

  const board = Array(9).fill(null);
  return (
    <>
      <h1>Tic-Tac-Toe 🎮</h1>
      <div className="card"></div>
    </>
  );
}

export default App;
