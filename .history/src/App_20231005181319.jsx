import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tic-Tac-Toe Game with React and Vite 🎮</h1>
      <div className="card"></div>
    </>
  );
}

export default App;
