import "./App.css";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = color === "red" ? "blue" : "red";
  return (
    <div className="App">
      <button
        style={{ backgroundColor: disabled ? "gray" : color }}
        onClick={() => setColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
