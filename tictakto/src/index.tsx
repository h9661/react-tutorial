import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function Square(props: any) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component<{}, { squares: any[]; turn: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      turn: 0,
      squares: Array(9).fill(null),
    };
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();

    if (squares[i] === null) {
      if (this.state.turn % 2 === 0) {
        squares[i] = "X";
      } else {
        squares[i] = "O";
      }

      this.setState({ turn: this.state.turn + 1 });
    }

    this.setState({ squares: squares });
  }

  calculateWinner(squares: any[]) {
    const lines = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // Diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return false;
  }

  renderSquare(i: number) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    let status = `Next player: ${this.state.turn % 2 === 0 ? "X" : "O"}`;
    let winner = this.calculateWinner(this.state.squares);
    if (winner) {
      status = `Winner: ${winner}`;

      return (
        <div>
          <div className="status">{status}</div>
        </div>
      );
    }

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

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
