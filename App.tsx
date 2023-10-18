import { useState } from "react";
import "./App.css";

function App() {
  /*From add.tsx file*/
  /* Combing them to avoid managing different props and states */
  const [list, setList] = useState([] as any[]);

  const handleAddTodo = (todo: string) => {
    const newTask = todo;
    setList([...list, newTask]);
  };

  /*From tasks.tsx file */

  function Delete(id: number) {
    let newList = [...list]; // Create a copy of the original list
    newList.splice(id, 1);
    setList(newList);
  }

  const [select, setSelect] = useState(-1);
  let index_glob = -1;

  const [input, setInputTask] = useState("");
  const handleInputChange = (event: any) => {
    setInputTask(event.target.value);
  };
  return (
    <>
      <h1> TODOLIST APP (BASIC)</h1>
      <br /> <br />
      <input
        className="Placeholder"
        type="text"
        placeholder={"Enter the task here"}
        value={input}
        onChange={handleInputChange}
      ></input>
      <br /> <br />
      <div>
        <ol className="list-group">
          {list.map((task, index) => (
            <li
              key={index}
              onClick={() => {
                setSelect(index);
                index_glob = index;
              }}
              className={
                select === index ? "list-group-item active" : "list-group-item"
              }
            >
              {index + 1} .{task}
            </li>
          ))}
        </ol>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          handleAddTodo(input);
        }}
      >
        addTask
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          Delete(index_glob);
        }}
      >
        MarkDone
      </button>
    </>
  );
}

export default App;
