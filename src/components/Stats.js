export default function Stats({ items }) {
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
