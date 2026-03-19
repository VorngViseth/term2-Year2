import React from "react";

import "./index.css";

// Task: Identify why nothing is displayed and why nothing happen  on conslole when clicking on buton and fix it.

// As reminder :
//  1 - First carrefully read the console errors
//  2 - Then check possible errors on code
//  3- Finaly use the debuger/inspection tools on the browser if needed

export default function App() {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <>
      <h2>You're logged in!</h2>
      <p>Welcome to your user profile!</p>
      <button onClick={clickHandler}>Click me!</button> {/*  name of the function was wrong and the event onClick was wring syntax*/}
    </>
  );
}
