import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div>
      <h1 className="text-4xl mt-12 font-semibold text-center">
        This is UseEffect Hook
      </h1>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="text-2xl font-bold bg-cyan-500 text-white py-2 px-2 rounded-sm"
      >
        {hidden ? "Show" : "hide"}
      </button>
      {/* <h1>{count}</h1> */}
      {!hidden && <Counter />}
    </div>
  );
};
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Render");
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <h1>{count}</h1>;
};
export default UseEffectExample;
