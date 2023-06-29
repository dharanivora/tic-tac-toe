import { useState } from "react";
import "./Styles.css";

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setXNext] = useState(true);
    const [count, setCount] = useState(0);

    const result = calculateWinner(squares);
    function handleClick(index) {
        const updatedSquares = squares.slice();

        if (updatedSquares[index] != null || result) {
            return;
        }

        updatedSquares[index] = isXNext ? "X" : "O";
        setCount(count + 1);
        setXNext(!isXNext);
        setSquares(updatedSquares);
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
            [2, 4, 8],
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
        status = "Game over! Let's have one more on us!!!";
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

function App() {
    return (
        <div>
            <h1>Welcome to Tic-Tac-Toe!</h1>
            <Board />
        </div>
    );
}

export default App;
