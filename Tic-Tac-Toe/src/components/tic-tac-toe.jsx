import React from "react";
import useTicTacToe from "../hooks/useTicTacToe";

export default TicTacToe = () => {
  const { board, getStatusMessage, handleClick, checkWinner, resetGame } =
    useTicTacToe();
  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={() => resetGame()}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((cell, i) => (
          <button key={i} className="cell" onClick={() => handleClick(i)}>
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
};
