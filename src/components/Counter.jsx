import { selectCount } from "../features/counter/CounterSlice";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector(selectCount);

  return <div className="counter">{count}</div>;
};

export default Counter;
