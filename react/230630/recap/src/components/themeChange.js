import React from "react";
import { useState } from "react";

const ThemeChange = () => {
  const [mode, setMode] = useState(true);
  
  const ModeChange = () => {
    setMode(!mode);
  }

  return(
    <div>
      <p>Current Theme: {mode ? "light" : "dark"}</p>
      <button onClick={ModeChange}>Toggle Theme</button>
    </div>
  );
}

export default ThemeChange;