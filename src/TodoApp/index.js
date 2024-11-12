import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addjob, deleteJob } from "./actions";
import logger from "./logger";

function TodoApp() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(addjob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob())}> &times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
