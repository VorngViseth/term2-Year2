import { useState } from "react";

export default function StuffForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function priceChangeHandler(event) {
    setPrice(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    onSubmit(name, price);
  }

  return (
    <form className="stuff-form" onSubmit={submitHandler}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={nameChangeHandler} />

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={priceChangeHandler} />

      <button type="submit" onClick={submitHandler}>Add Stuff</button>
    </form>
  );
}
