import TodoApp from "./TodoApp";
import "./App.css";
import { useStore, actions } from "./store";
import {
  addTodoInput,
  deleteTodoInput,
  setTodoInput,
  updateTodoInput,
} from "./store/actions";
import { useRef, useState, useImperativeHandle } from "react";
import Video from "./videos/Video";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const inputRef = useRef();
  const [isEditing, setEditing] = useState(null);

  const handleAdd = () => {
    if (isEditing !== null) {
      dispatch(updateTodoInput(isEditing, todoInput));
      setEditing(null);
    } else {
      dispatch(addTodoInput(todoInput));
    }
    dispatch(setTodoInput(""));
    inputRef.current.focus();
  };
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Stop</button>
      <h3>Todo List</h3>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>{isEditing !== null ? "Save" : "Add"}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span onClick={() => dispatch(deleteTodoInput())}> &times;</span>
            <button
              onClick={() => {
                setEditing(index);
                dispatch(setTodoInput(todo));
                inputRef.current.focus();
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      {/* <TodoApp /> */}
    </>
  );
}

export default App;
