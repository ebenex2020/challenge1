/** @format */

import { useState } from "react";

const Challenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleMinus = (c) => {
    setCount(c - step);
  };
  const handlePlus = (c) => {
    setCount(c + step);
  };

  const date = new Date("26 jun 2023");
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="range"
        min={0}
        max={10}
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      />
      <span>Step: {step}</span>

      <div>
        <button onClick={() => handleMinus(count)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={() => handlePlus(count)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} ${count === 1 ? "day" : "day's"} from now is `
            : `${Math.abs(count)} ${count === -1 ? "day" : "days"} ago was `}
        </span>
        {date.toDateString()}
      </p>
      {(step !== 1 || count !== 0) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};

export default Challenge;
