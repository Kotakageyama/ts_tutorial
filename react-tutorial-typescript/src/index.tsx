import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

type SquareProps = { 
  value: SquareState;
  onClick: () => void;
};
type SquareState = 'X' | 'O' | null;

const Square = (props: SquareProps) => {
  <button className="square" onClick={props.onClick}>
      {props.value}
  </button>
}

class Board extends React.Component {
  constructor(props: SquareProps){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }
  renderSquare(i: number) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(<Game />);