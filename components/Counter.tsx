"use client";

import { useState } from "react";

type CounterProps = {
  step: number;
  buttonColor: string;
};

export default function Counter({ step, buttonColor }: CounterProps) {
  const [count, setCount] = useState(0);

  function handleClick() {
    const next = count + step;
    setCount(next > 10 ? 0 : next);
  }

  return (
    <div style={{ display: "inline-flex", alignItems: "center"}}>
      <div style={{ minWidth: 40, textAlign: "center", fontWeight: 600 }}>{count}</div>
      <button
        onClick={handleClick}
        style={{
          background: buttonColor,
          color: "white",
          border: "none",
          padding: "0.5rem 0.75rem",
          borderRadius: 6,
          cursor: "pointer"
        }}
      >
        +{step}
      </button>
    </div>
  );
}