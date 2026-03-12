import { useState } from "react";

export default function StuffForm({ stuffs, setStuffs }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addStuff(e) {
    e.preventDefault();
    setStuffs([...stuffs, { name, price }]);
  }

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={(e) => setName(e.target.value)} />

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={(e) => setPrice(e.target.value)} />

      <button onClick={addStuff}>Add Stuff</button>
    </form>
  );
}
