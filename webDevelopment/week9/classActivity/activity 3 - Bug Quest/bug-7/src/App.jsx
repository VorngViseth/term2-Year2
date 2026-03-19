import React from "react";
import "./index.css";

// Bug 1 :
// Analyse  why we see the bug on the console :  Uncaught ReferenceError: useState is not defined
//          - You can click on the bug to check the bug related to the bug

// Bug 2 :
// Analyse  why  the list of items is not displayed on the view

//  1 - First carrefully read the console errors
//  2 - Then check possible errors on code
//  3- Finaly use the debuger/inspection tools on the browser if needed

function App() {
  const [items, setItems] = React.useState([]);

  const addItem = (item) => {
    setItems([...items, item]); // change to this because we constantly add to the array
  };

  const displayItems = () => {
    return items.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <div>
      <h1>E-commerce Cart</h1>
      <button onClick={() => addItem("Item A")}>Add Item A</button>
      <button onClick={() => addItem("Item B")}>Add Item B</button>
      <button onClick={() => addItem("Item C")}>Add Item C</button>
      <ul>{displayItems()}</ul>
    </div>
  );
}
export default App;
