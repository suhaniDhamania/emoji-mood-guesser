import React, { useState } from "react";
import "./App.css";
import { emojis, moodoptions } from "./data.js";

const App = () => {
  const getrandomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  };
  const [currentEmoji, setCurrentEmoji] = useState(getrandomEmoji());
  const [message, setMessage] = useState("guess the emojis mood!");
  const [countpoints, setCountpoints] = useState(0);

  const handleguess = (moodoptions, currentEmoji) => {
    //console.log("guess mood=", moodoptions);
    //console.log("current emoji mood=", currentEmoji.mood);

    if (currentEmoji.mood === moodoptions) {
      //console.log("right");
      setMessage("right guess next try");
      setCountpoints((prevpoint) => prevpoint + 1);
      setCurrentEmoji(getrandomEmoji());
    } else {
      //console.log("wrong");
      setMessage(`wrong guess try again you have total points : ${countpoints}`);
      setCountpoints(countpoints);
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#1e3a8a",
          width: "400px",
          height: "600px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="card"
      >
        <h2 style={{backgroundColor:"white"}}>Emoji mood guesser</h2>
        <h1>{currentEmoji.emoji}</h1>
        <div className="buttons">
          {moodoptions.map((mood) => (
            <button
              onClick={() => handleguess(mood, currentEmoji)}
              style={{
                backgroundColor: "#3b82f6",
                margin: "4px",
                outline: "none",
              }}
              key={mood}
            >
              {mood}
            </button>
          ))}
        </div>
        <p style={{ fontSize: "20px", fontWeight: "bold",backgroundColor:"white"}}>
          total points : {countpoints}
        </p>
        <h2
          style={{
            color:
              message ===
              `wrong guess try again you have total points : ${countpoints}`
                ? "red"
                : "green",
          }}
        >
          {message}
        </h2>
      </div>
    </>
  );
};
export default App;
