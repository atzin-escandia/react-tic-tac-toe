import React from "react";

const Modal = () => {
  if (winner) return;
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner ? `Won ${winner}!` : "Tie :("}</h2>
        <button className="win" onClick={restartGame}>
          Start again
        </button>
      </div>
    </section>
  );
};

export default Modal;