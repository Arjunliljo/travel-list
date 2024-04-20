import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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
  const handleReset = () => {
    if (items.length === 0) return;

    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggle={handlePacked}
        onReset={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}
