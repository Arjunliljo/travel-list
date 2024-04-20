export default function Item({ items, onDeleteItems, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        style={{ marginRight: "1rem" }}
        value={items.packed}
        onChange={() => onToggle(items.id)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={onDeleteItems(items.id)}>❌</button>
    </li>
  );
}
