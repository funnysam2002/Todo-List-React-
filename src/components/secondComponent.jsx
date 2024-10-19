import ThirdComponent from "./thirdComponent";
import { useState } from "react";
export default function secondComponent() {
  const [title, setTitle] = useState(""); //title that the user enters
  const [arr, setArr] = useState([]); // list which maintains the title names

  function handleClick() {
    setArr([...arr, title]);
    setTitle("");
  }
  return (
    <div>
      <div class="field has-addons"> this class is used for input field and "submit" button to appear adjacent to each other
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
            <ThirdComponent titleName={e} num={id + 1} /> //we are passing the title and the index corresponding to the title as props which will be used in "thirdComponent.jsx"
          </li>
        ))}
      </ul>
    </div>
  );
}
