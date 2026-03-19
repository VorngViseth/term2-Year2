import React, { useState } from "react";

// Task: Identify why the counter is not incrementing correctly and fix it.

// As reminder :
//  1 - First carrefully read the console errors
//  2 - Then check possible errors on code
//  3- Finaly use the debuger/inspection tools on the browser if needed
function CounterApp() {
  const [count, setCount] = useState(0); // the bug is the state is string so chnage it to num which is useState(0) instead of useState("0")

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterApp;
