import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCounter = (num) => {
    setCount(count + num);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => handleCounter(1)} disabled={count >= 50}>
        +1
      </button>
      <button onClick={() => handleCounter(-1)} disabled={count <= 0}>
        -1
      </button>
      <button onClick={() => handleCounter(5)} disabled={count >= 46}>
        +5
      </button>
      <button onClick={() => handleCounter(-5)} disabled={count <= 4}>
        -5
      </button>
    </div>
  );
}

export default App;
