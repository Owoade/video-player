import React from "react";
import Player from "griffith";
import playerProps from "./playerProps";

function App() {
  return (
    <React.Fragment>
      <Player {...playerProps} />
    </React.Fragment>
  );
}

export default App;
