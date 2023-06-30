import { useState } from "react";
import "./Styles.css";

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ isXNext, squares, onPlay }) {
    const [count, setCount] = useState(0);

    let result = calculateWinner(squares);

    function handleClick(index) {
        if (squares[index] != null || result) {
            return;
        }

        const updatedSquares = squares.slice();
        updatedSquares[index] = isXNext ? "X" : "O";
        setCount(count + 1);
        onPlay(updatedSquares);
    }

    function calculateWinner(boardArr) {
        const winnerArr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winnerArr.length; i++) {
            const [x, y, z] = winnerArr[i];

            if (
                boardArr[x] &&
                boardArr[x] === boardArr[y] &&
                boardArr[x] === boardArr[z]
            ) {
                return boardArr[x];
            }
        }

        return null;
    }

    function areAllFilled(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == null) {
                return false;
            }
        }

        return true;
    }

    let status;
    if (result !== null) {
        status = "Winner: " + result;
    } else if (areAllFilled(squares)) {
        status = "Game over and it's a tie! Let's have one more on us!!!";
    } else {
        status = "Next player's turn: " + (isXNext ? "X" : "O");
    }

    return (
        <>
            <div className="info">{status}</div>

            <div className="board">
                <Square
                    value={squares[0]}
                    onSquareClick={() => handleClick(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleClick(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleClick(2)}
                />
                <Square
                    value={squares[3]}
                    onSquareClick={() => handleClick(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleClick(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleClick(5)}
                />
                <Square
                    value={squares[6]}
                    onSquareClick={() => handleClick(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleClick(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleClick(8)}
                />
            </div>
        </>
    );
}

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const isXNext = currentMove % 2 === 0;

    function handlePlay(updatedSquares) {
        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            updatedSquares,
        ];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to game start";
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <h1>Welcome to Tic-Tac-Toe!</h1>
            <div className="game-board">
                <Board
                    isXNext={isXNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;
