import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh"
      }}
    >
      <h2>Theme Toggle SPA</h2>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default App;
