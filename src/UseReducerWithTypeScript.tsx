import { ChangeEvent } from "react";
const initialState = { name: "", email: "" };
type TAction = {
  type: string;
  payload: string;
};
const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};
import { useReducer } from "react";
const UseReducerWithTypeScript = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">
          hello this is input form
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) =>
              dispatch({ type: "addName", payload: e.target.value })
            }
            type="text"
            name="name"
            id=""
            className="border-2  py-2 border-blue-600 rounded-sm"
          />
          <input
            onChange={(e) =>
              dispatch({ type: "addEmail", payload: e.target.value })
            }
            type="text"
            name="email"
            id=""
            className="border-2  py-2 border-blue-600 rounded-sm"
          />
          <button
            type="submit"
            className="bg-blue-500 py-2 px-2 text-white font-bold rounded-md space-x-3"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default UseReducerWithTypeScript;
