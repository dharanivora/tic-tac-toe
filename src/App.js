import "./Styles.css";
import { useState } from "react";

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue("X");
    }

    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
}

function Board() {
    return (
        <div className="board">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
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
