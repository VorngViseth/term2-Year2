import React from "react";
import "./index.css";

const SMALL = "Small";
const MEDIUM = "Medium";
const LARGE = "Large";

// Analyze why at startup, the message displays "You size is:" without any value. Fix this bug

// As reminder :
//  1 - First carrefully read the console errors
//  2 - Then check possible errors on code
//  3- Finaly use the debuger/inspection tools on the browser if needed


// there is nothing wrong with the code
function App() {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1>Survey Form</h1>
      <form>
        <div>
          <label>
            <input
              type="radio"
              value={SMALL}
              checked={selectedOption === SMALL}
              onChange={handleOptionChange}
            />
            {SMALL}
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value={MEDIUM}
              checked={selectedOption === MEDIUM}
              onChange={handleOptionChange}
            />
            {MEDIUM}
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value={LARGE}
              checked={selectedOption === LARGE}
              onChange={handleOptionChange}
            />
            {LARGE}
          </label>
        </div>
      </form>
      <p>You size is: {selectedOption}</p>
    </div>
  );
}

export default App;
