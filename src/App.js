const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 1, description: "Passports", quantity: 2, packed: false },
  {
    id: 2,
    description: "Sockssdfa",
    quantity: 12,
    packed: false,
  },
  { id: 1, description: "Passports", quantity: 2, packed: false },
  {
    id: 1,
    description: "Passport2",
    quantity: 2,
    packed: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for 😍 your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return <option value={num}>{num}</option>;
        })}
      </select>
      <input type="text" placeholder="Text..." />
      <button>add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🧑🏻‍💼 You have X items on the list, and you already packed X(X%)</em>
    </footer>
  );
}
