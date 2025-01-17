'use client';
import { useReducer, useState } from "react";

type State = { count: number; loading: boolean };
enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  TOGGLE_LOADING = 'TOGGLE_LOADING'
}
type Action = { type: ActionType }
// type Action = { type: "INCREMENT" | "DECREMENT" | "TOGGLE_LOADING" }
const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'TOGGLE_LOADING':
      return { ...state, loading: !state.loading };
    default:
      // throw new Error("Invalid action type");
      return state;
  }
}

const UseReducerPage = () => {
  const stateDefaultValue: State = { count: 0, loading: false };
  const [state, dispatch] = useReducer(counterReducer, stateDefaultValue);
  return (
    <div>
      <div>state.count: {state.count}</div>
      <div>state.loading: {state.loading ? "isLoading ..." : "Done"}</div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column", alignItems: "flex-start", margin:'2rem 0rem' }}>
        <button onClick={() => { dispatch({ type: ActionType.INCREMENT }) }}>Add</button>
        <button onClick={() => { dispatch({ type: ActionType.DECREMENT }) }}>Reduce</button>
        <button onClick={() => { dispatch({ type: ActionType.TOGGLE_LOADING }) }}>Load</button>
      </div>
    </div>
  )
}

export default UseReducerPage;