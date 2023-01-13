import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  const [input, setInput] = useState("translation will appear here...");

  function inputHandler(event) {
    let inputEmojiMeaning = emojiDictionary[event.target.value];

    if (inputEmojiMeaning === undefined) {
      inputEmojiMeaning = `We don't have this in our database.`;
    }
    setInput(inputEmojiMeaning);
  }

  function clickHandler(event) {
    const clickedEmoji = event.target.textContent;
    setInput(emojiDictionary[clickedEmoji]);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={inputHandler}></input>
      <div>
        <strong>{input}</strong>
      </div>
      <div className="emoji-chooser">
        {Object.keys(emojiDictionary).map((emoji) => (
          <span key={emoji} onClick={clickHandler}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
