import "./App.css";
import AddButton from "./components/AddButton";
import Counter from "./components/Counter";

import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <Counter count={count} />
      <div className="buttons">
        <AddButton num="5" text="Decrease" />
        <AddButton num="1" text="Decrease" />
        <AddButton text="Reset" />
        <AddButton num="1" text="Increase" />
        <AddButton num="5" text="Increase" />
      </div>
    </div>
  );
};

export default App;
