import React from "react";

import StuffForm from "./components/StuffForm";
import StuffCard from "./components/StuffCard";

const INITIAL_STUFFS = [
  {
    name: "Banana",
    price: 54.5,
  },
  {
    name: "Computer",
    price: 100.5,
  },
  {
    name: "Table",
    price: 60,
  },
];

// Analyse  why we DON'T see the list of card  of items below the form panel

//  1 - First carrefully read the console errors
//  2 - Then check possible errors on code
//  3- Finaly use the debuger/inspection tools on the browser if needed

export default function App() {
  const [stuffs, setStuffs] = React.useState(INITIAL_STUFFS);

  const handleAddStuff = (name, price) => {
    const newStuff = {
      name: name,
      price: price,
    };
    setStuffs([newStuff, ...stuffs]);
  };

  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header>

      <StuffForm onSubmit={handleAddStuff}></StuffForm>

      <div className="stuff-list">
        {stuffs.map((stuff, index) => (
          <StuffCard key={index} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}
