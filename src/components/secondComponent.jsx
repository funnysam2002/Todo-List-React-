import ThirdComponent from "./thirdComponent";
import { useState } from "react";
export default function secondComponent() {
  const [title, setTitle] = useState("");
  const [arr, setArr] = useState([]);

  function handleClick() {
    setArr([...arr, title]);
    setTitle("");
  }
  return (
    <div>
      <div class="field has-addons">
        <input
          type="text"
          placeholder="Enter title name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          class="input is-normal"
          style={{ backgroundColor: "#E3E2E2" }}
        />
        <button class="button is-primary is-normal" onClick={handleClick}>
          Submit
        </button>
      </div>

      <h1 style={{ fontSize: "30px" }}>TODO LIST</h1>
      <ul style={{ listStyleType: "none" }}>
        {arr.map((e, id) => (
          <li key={id}>
            <ThirdComponent titleName={e} num={id + 1} />
          </li>
        ))}
      </ul>
    </div>
  );
}
