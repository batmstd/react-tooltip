import React from "react";
import Tooltip from "./Tooltip.jsx";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Tooltip content="top" position="top">
          top
        </Tooltip>
      </div>
      <div>
        <Tooltip content="left" position="left">
          left
        </Tooltip>
      </div>
      <div>
        <Tooltip content="right" position="right">
          right
        </Tooltip>
      </div>
      <div>
        <Tooltip content="bottom" position="bottom">
          bottom
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
