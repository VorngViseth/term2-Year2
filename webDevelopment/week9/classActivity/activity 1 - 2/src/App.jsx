import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    // the bug is the newValue is store as a string since the user input is string so there are some error with the math, there fore we change it to number
    const parsedValue = Number(newValue);

    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number.isFinite(parsedValue) ? parsedValue : 0, // change to make sure the value is a number, if not we set it to 0
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
