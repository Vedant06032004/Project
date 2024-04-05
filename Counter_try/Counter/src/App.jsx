import { useState } from "react";

function App() {
  const [counter, secounter] = useState(15);

  return (
    <>
      <h1>Counter is {counter}</h1>
      <button
        onClick={() => {
          if (counter < 20) secounter(counter + 1);
        }}
      >
        Increase
      </button>

      <br />

      <button
        onClick={() => {
          if (counter > 0) secounter(counter - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
