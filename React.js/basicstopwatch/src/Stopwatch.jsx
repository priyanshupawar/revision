import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);
  useEffect(() => {
    if (isRunning) {
      timeRef.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    } else {
      clearInterval(timeRef.current);
    }
    return () => {
      clearInterval(timeRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };
  const handleReset = () => {
    setTime(0);
  };
  return (
    <div className="App">
      <h1>Timmer React App</h1>
      <div>
        <p>Time:{time} second</p>
      </div>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
