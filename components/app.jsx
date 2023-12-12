import React from "react";

function App(props) {
  const data = props.props.data ?? "Hello World!";

  return (
    <div>{data}</div>
  );
};

export default App;
