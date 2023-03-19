import React from "react";

export default function Button({ text, onClick }) {
  return <button onClick={onClick}>Click me {text}</button>;
}
