import { useState } from "react";
import "./Styles.css";

function Square({ value, callWhenClicked }) {
    return (
        <button className="square" onClick={callWhenClicked}>
            {value}
        </button>
    );
}

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(index) {
        const updatedSquares = squares.slice();
        updatedSquares[index] = "X";
        setSquares(updatedSquares);
    }

    return (
        <div className="board">
            <Square value={squares[0]} callWhenClicked={() => handleClick(0)} />
            <Square value={squares[1]} callWhenClicked={() => handleClick(1)} />
            <Square value={squares[2]} callWhenClicked={() => handleClick(2)} />
            <Square value={squares[3]} callWhenClicked={() => handleClick(3)} />
            <Square value={squares[4]} callWhenClicked={() => handleClick(4)} />
            <Square value={squares[5]} callWhenClicked={() => handleClick(5)} />
            <Square value={squares[6]} callWhenClicked={() => handleClick(6)} />
            <Square value={squares[7]} callWhenClicked={() => handleClick(7)} />
            <Square value={squares[8]} callWhenClicked={() => handleClick(8)} />
        </div>
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
