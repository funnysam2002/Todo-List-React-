import { useState } from "react";

export default function thirdComponent({ titleName, num }) {
  const [td, setTd] = useState(""); // todo that will be added to list
  const [list, setList] = useState([]); //list which manages the todo
  const [btn, setBtn] = useState(false); //toggle button used for disabling the input and "ADD" button
  const [strike, setStrike] = useState([]); //list which carry boolean values to check whether the task is completed or not
  const [del, setDel] = useState(false); // value used to delete the todo component
  const [disable, setDisable] = useState(false); //toggle button used to disable the checkboxes 

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
    !del && ( // condition provided to delete the task component
      <div className="list-app">
        <div>
          {/* Input field */} //default title would be "TASK-LIST ID" [ID is the index of the task in the list]
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

          {/* Add button */} //Performs the task of adding the task to the list component

          <button
            className="button is-info is-small"
            onClick={() => (td ? handleAdd() : alert("Fill out the field"))}
            disabled={btn}
          >
            Add
          </button>

          {/* Save button */} //toggle button used to disable the input field and "Add" button

          <button className="button is-success is-small" onClick={handleSave}>
            Save
          </button> 

          {/* Update button */} //toggle button which inverts the disability caused due to clicking the "Save" button

          <button className="button is-warning is-small" onClick={handleUpdate}>
            Update
          </button> 

          {/* Delete button */} // deletes the div element present in the "list", but toggling the {del} as true/false

          <button className="button is-danger is-small" onClick={handleDelete}>
            Delete
          </button> 
        </div>

    
        <div className="content"> // div for displaying all the tasks entered 
          <ul>
            {list.map((t, id) => (
              <li
                key={id}
                style={{
                  textDecoration: strike[id] ? "line-through" : "none",
                  color: disable ? "lightgrey" : "black",
                }}
              >
                // a checkbox which when checked strikes off the task.
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
