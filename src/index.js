import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Text() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating color={"blue"} maxRaing={10} onSetRating={setRating} />
    </div>
  );
}
root.render(
  <React.StrictMode>
    <StarRating
      maxRaing={5}
      messages={["bad", "normal", "quite good", "good", "excellent"]}
    />
    <Text />
  </React.StrictMode>
);
