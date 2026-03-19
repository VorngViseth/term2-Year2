import React from "react";
import "./index.css";

// Analyze why some operations are not yielding the correct result and fix the bug.

// As reminder :
//  1 - First carrefully read the console errors
//  2 - Then check possible errors on code
//  3- Finaly use the debuger/inspection tools on the browser if needed

function App() {
  const [result, setResult] = React.useState(0);
  const [operand1, setOperand1] = React.useState(0);
  const [operand2, setOperand2] = React.useState(0);
  const [operator, setOperator] = React.useState("");

  const calculate = () => {
    let computedResult;
    switch (operator) {
      case "+":
        computedResult = operand1 + operand2;
        break;
      case "-":
        computedResult = operand1 - operand2;
        break;
      case "*":
        computedResult = operand1 * operand2;
        break;
      case "/":
        computedResult = operand1 / operand2;
        break;
      default:
        computedResult = 0;
    }
    setResult(computedResult);
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <input
        type="number"
        value={operand1}
        onChange={(e) => setOperand1(Number(e.target.value))} // change the input to num instead of string
      />
      <input
        type="number"
        value={operand2}
        onChange={(e) => setOperand2(Number(e.target.value))}  // change the input to num instead of string
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={calculate}>COMPUTE</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
