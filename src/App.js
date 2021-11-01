import "./App.css";

import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const newButtonColor = color === "red" ? "blue" : "red";
  return (
    <div className="App">
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newButtonColor)}
      >
        Change to {newButtonColor} shakib
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
