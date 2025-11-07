import React, { useState } from "react";

const EventDemo = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // handle input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // handle button clicks
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
    setName("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>⚙️ Event Handling & State Update</h2>

      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={handleChange}
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />
      <p style={{ marginTop: "10px" }}>
        👋 Hello, {name ? name : "Stranger"}!
      </p>

      <hr style={{ width: "50%" }} />

      <h3>🧮 Counter Example</h3>
      <p>Current Count: {count}</p>

      <button onClick={handleIncrement} style={{ marginRight: "10px" }}>
        ➕ Increment
      </button>
      <button onClick={handleReset}>🔁 Reset</button>
    </div>
  );
};

export default EventDemo;
