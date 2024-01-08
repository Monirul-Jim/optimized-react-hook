const initialState = { count: 0 };
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };

    case "decrement":
      return { count: currentState.count - 1 };

    default:
      return currentState;
  }
};
import { useReducer } from "react";
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 className="text-4xl mt-8 font-bold text-center">
        This is Use Reducer
      </h1>
      <h1 className="text-2xl font-bold ml-10">{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="bg-blue-600 font-bold text-white py-2 px-2 rounded-sm ml-4"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="bg-red-600 font-bold text-white py-2 px-2 rounded-sm ml-4"
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducerExample;
