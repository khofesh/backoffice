import React, { useState } from "react";
import { Button } from "@blueprintjs/core";

function App() {
  let [someNumber, setSomeNumber] = useState(0);

  const incrementCounter = () => {
    setSomeNumber(someNumber + 1);
  };

  return (
    <div style={{ margin: 5 }}>
      <div>{someNumber}</div>

      <div>
        <Button intent="success" text="increase" onClick={incrementCounter} />
      </div>
    </div>
  );
}

export default App;
