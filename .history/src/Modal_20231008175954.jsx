export const Modal = ({ winner, restartGame }) => {
  if (winner !== null) return null;
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
