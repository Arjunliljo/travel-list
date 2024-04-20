import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    setItems([...items, item]);
  };
  const handleDeleteItems = (id) => {
    return () => setItems((items) => items.filter((item) => item.id !== id));
  };

  const handlePacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggle={handlePacked}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescrition] = useState("anytime");
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

function PackingList({ items, onDeleteItems, onToggle }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            key={item.id}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        style={{ marginRight: "1rem" }}
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <em className="stats">
        Start adding some items in your packing list 🧑🏻‍💼{" "}
      </em>
    );

  const numOfItems = items.length;
  const packedItems = items.reduce(
    (acc, item) => (item.packed ? acc + 1 : acc),
    0
  );

  return (
    <footer
      className={numOfItems === packedItems ? "stats packedAll" : "stats"}
    >
      {packedItems < numOfItems ? (
        <em>
          🧑🏻‍💼 You have {numOfItems} items on the list, and you already packed{" "}
          {packedItems} items{" "}
          {" (" + ((packedItems / numOfItems) * 100).toFixed(2) + "% )"}
        </em>
      ) : (
        <em>You Got EveryThing, Ready To Go ✔️</em>
      )}
    </footer>
  );
}
