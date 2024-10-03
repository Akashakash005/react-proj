import { useState } from "react";

function List() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [count, setCount] = useState(1);

  function addItem() {
    // const itemName = "item " + count;
    if (item.trim() !== "") {
      const itemName = `${count}${item}`;
      setList((previousState) => [...previousState, itemName]);

      setCount((previousState) => previousState + 1);
    }
  }
  console.log("current state", list);
  return (
    <>
      <h1>List </h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem}>Add item </button>

      <ul>
        {list.map((el, index) => (
          <li key={index}>{el} </li>
        ))}
      </ul>
    </>
  );
}

export default List;
