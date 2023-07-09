import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = (props) => (
  <div style={styles}>
    <Hello names="CodeSandbox" />
    <h2>Since refresh: {props.count}</h2>
  </div>
);

let count = 0;
setInterval(
  () => render(<App count={count++} />, document.getElementById("root")),
  1000
);
