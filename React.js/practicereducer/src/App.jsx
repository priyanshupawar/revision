import "./App.css";
import Counter1 from "./Components/Counter1/Counter1";
import Counter2 from "./Components/Counter2/Counter2";

function App() {
  return (
    <div className="App">
      <h1>Counter with useState hook </h1>
      <Counter1 />

      <br />
      <br />
      <hr />
      <h1>Counter with useReducer hook </h1>
      <Counter2 />
    </div>
  );
}

export default App;
