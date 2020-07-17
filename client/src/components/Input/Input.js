import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      placeholder="Type your message here..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
