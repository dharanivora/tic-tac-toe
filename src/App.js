import "./Styles.css";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

function Board() {
  return (
    <div className="board">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
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
