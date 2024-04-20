import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggle,
  onReset,
}) {
  const [input, setInput] = useState("input");

  let filterdItems;

  if (input === "input") filterdItems = items.slice();
  else if (input === "description")
    filterdItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else
    filterdItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {filterdItems.map((item) => (
          <Item
            items={item}
            onDeleteItems={onDeleteItems}
            key={item.id}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={input} onChange={(e) => setInput(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY description</option>
          <option value="packed">SORT BY packed status</option>
        </select>
        <button onClick={onReset}>Clear</button>
      </div>
    </div>
  );
}
