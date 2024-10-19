import { useState } from "react";

export default function thirdComponent({ titleName, num }) {
  const [td, setTd] = useState("");
  const [list, setList] = useState([]);
  const [btn, setBtn] = useState(false);
  const [strike, setStrike] = useState([]);
  const [del, setDel] = useState(false);
  const [disable, setDisable] = useState(false);

  function handleAdd() {
    setList([...list, td]);
    setTd("");
    setStrike([...strike, false]);
  }

  function handleSave() {
    setBtn(true);
    setDisable(true);
  }

  function handleUpdate() {
    setBtn(false);
    setDisable(false);
  }

  function handleCheck(index) {
    const updatedStrikeList = [...strike];
    updatedStrikeList[index] = !updatedStrikeList[index];
    setStrike(updatedStrikeList);
  }

  function handleDelete() {
    setDel(!del);
  }

  return (
    !del && (
      <div className="list-app">
        {/* Input and Buttons in one line */}
        <div>
          {/* Input field */}
          <div className="control">
            <p>Title : {titleName ? titleName : `TASK-LIST ${num}`}</p>
            <input
              type="text"
              placeholder="Add todo"
              value={td}
              onChange={(e) => setTd(e.target.value)}
              className="input is-normal"
              disabled={btn}
              style={{ backgroundColor: "#E3E2E2" }}
              required
            />
          </div>

          {/* Add button */}

          <button
            className="button is-info is-small"
            onClick={() => (td ? handleAdd() : alert("Fill out the field"))}
            disabled={btn}
          >
            Add
          </button>

          {/* Save button */}

          <button className="button is-success is-small" onClick={handleSave}>
            Save
          </button>

          {/* Update button */}

          <button className="button is-warning is-small" onClick={handleUpdate}>
            Update
          </button>

          {/* Delete button */}

          <button className="button is-danger is-small" onClick={handleDelete}>
            Delete
          </button>
        </div>

        {/* Task List Below Input and Buttons */}
        <div className="content">
          <ul>
            {list.map((t, id) => (
              <li
                key={id}
                style={{
                  textDecoration: strike[id] ? "line-through" : "none",
                  color: disable ? "lightgrey" : "black",
                }}
              >
                <input
                  type="checkbox"
                  checked={strike[id]}
                  onChange={() => handleCheck(id)}
                  disabled={disable}
                />
                <label>{t}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}
