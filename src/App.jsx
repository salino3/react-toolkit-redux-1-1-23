import { useSelector, useDispatch } from "react-redux";
import { increment, incrementBy, decrement } from "./store/slices/counter";
import "./App.css";

function App() {
  const { counter, timer } =  useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <h3>
          <code> count is {counter}</code>
        </h3>
        <button onClick={() => dispatch(decrement())}>Decrement</button>{" "}
        <button onClick={() => dispatch(increment())}>Increment</button>{" "}
        <button onClick={() => dispatch(incrementBy(2))}>Increment by 2</button>
      </div>
      <hr />
    </div>
  );
}

export default App;


