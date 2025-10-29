import Counter from "../../components/Counter.js";

export default function CounterPage() {
  return (
    <div>
      <h1>Counters</h1>
      <p>Two instances of the same component with different props</p>
      <div>
        <Counter step={1} buttonColor="blue" />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <Counter step={2} buttonColor="green" />
      </div>

      <p>
        Counters reset to 0 when the value is greater than or equal to 10
      </p>
    </div>
  );
}