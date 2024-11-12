import reducer from "./reducer";

function logger() {
  return (prevState, action) => {
    console.group(action.type);
    console.log("Prev state:", prevState);
    console.log("Action:", action);

    const newState = reducer(prevState, action);

    console.log("Next state:", newState);
    console.groupEnd();

    return newState;
  };
}

export default logger;
