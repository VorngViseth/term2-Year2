import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(parseFloat(event.target.value));
  }

  function onB(event) {
    setB(parseFloat(event.target.value));
  }

  function compute() {
    const res = a + b;
    setResult(res);
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled 
      value={result}/>
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
