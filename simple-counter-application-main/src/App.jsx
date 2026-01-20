import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">   {/* 👈 YAHI MAIN FIX */}
      <h2>Counter SPA</h2>
      <p>Count: {count}</p>

      <div className="btns">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
