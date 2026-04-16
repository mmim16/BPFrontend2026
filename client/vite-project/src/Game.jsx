import { useState } from "react";

export default function Game() {
  const [text, setText] = useState("Click the button");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Yelp Review Game</h1>

      <p>{text}</p>

      <button onClick={() => setText("React is working 🎉")}>
        Click me
      </button>
    </div>
  );
}