import "./App.css";
import FetchCleanup from "./FetchCleanup";
import InputForm from "./InputForm";
// import UseEffectExample from "./UseEffectExample";
import UseReducerExample from "./UseReducerExample";
import UseReducerWithTypeScript from "./UseReducerWithTypeScript";
function App() {
  return (
    <>
      <InputForm />
      <UseReducerExample />
      <UseReducerWithTypeScript />
      {/* <UseEffectExample /> */}
      <FetchCleanup />
    </>
  );
}

export default App;
