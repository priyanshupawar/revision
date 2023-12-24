import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {show && <Counter />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show Counter
      </button>
    </div>
  );
}

export default App;
