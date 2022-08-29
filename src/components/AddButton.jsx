import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "../features/counter/CounterSlice";

const AddButton = ({ num, text }) => {
  const usedispatch = useDispatch();
  const count = useSelector(selectCount);

  // If button is meant to be RESET button, the number (num) is used to decrese the count back to 0
  if (text === "Reset") {
    num = -count;
  }

  // Add num to Redux Store
  return (
    <button className="button" onClick={() => usedispatch(increment(num))}>
      {text} {text === "Reset" ? "" : num}
    </button>
  );
};

export default AddButton;
