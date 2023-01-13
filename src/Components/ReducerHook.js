import React from "react";
import { useReducer } from "react";

const initiState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function ReducerHook() {
  const [count, dispatch] = useReducer(reducer, initiState);

  return (
    <div>
      <hr />
      <h3>UseReducer Hook Demo</h3>
      <div className="d-flex">
        <button
          className="btn btn-primary m-2"
          onClick={() => dispatch("increment")}
        >
          Increment
        </button>
        <h3>Count={count}</h3>
        <button
          className="btn btn-primary m-2"
          onClick={() => dispatch("decrement")}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
