import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Jun 10 2023");
  date.setDate(date.getDate());

  const handleMinus = () => {
    setStep(step - 1);
  };

  const handlePlus = () => {
    setStep(() => step + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <button onClick={handleMinus} type="button">
          &minus;
        </button>
        <span>Step:{step}</span>
        <button onClick={handlePlus} type="button">
          +
        </button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)} type="button">
          &minus;
        </button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((c) => c + step)} type="button">
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} ${count === 1 ? "day" : "day's"} from now is `
            : `${Math.abs(count)} ${count === -1 ? "day" : "day's"} ago was `}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
};

export default Counter;
