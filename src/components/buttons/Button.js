import { useState } from "react";
import "./Button.css";

function Button() {
  const [count, setCount] = useState(0);

  const ChangeNumber = (meaning) => {
    if (meaning === "decrease") {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <button onClick={() => ChangeNumber("decrease")}>-</button>
      <div className="clicks-count">I was Clicked {count} Times</div>
      <button onClick={() => ChangeNumber("increase")}>+</button>
    </div>
  );
}

export default Button;
