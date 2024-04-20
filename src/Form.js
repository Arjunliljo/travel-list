import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescrition] = useState("");
  const [qty, setQty] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    //collecting data
    const newItem = {
      description: description,
      quantity: qty,
      id: Date.now(),
      packed: false,
    };

    onAddItems(newItem);

    //reseting form
    setDescrition("");
    setQty(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for 😍 your trip?</h3>

      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Text..."
        value={description}
        onChange={(e) => setDescrition(e.target.value)}
        required
      />
      <button>add</button>
    </form>
  );
}
