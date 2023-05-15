import { useState } from "react";
import "./Button.css";

function Button() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <button onClick={decrease}>-</button>
      <div className="clicks-count">I was Clicked {count} Times</div>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Button;
