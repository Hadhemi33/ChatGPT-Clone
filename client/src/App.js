import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";
import axios from "axios";
function App() {
  const [prompt, setPrompt] = useState("");
  const [responsee, setResponsee] = useState("");
  const handleChanges = (e) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("api/complete", {
      prompt: prompt,
    });
    setResponsee(response.data);
  };
  return (
    <>
      <p>Hello</p>
      <input
        className="form-control"
        type="text"
        id="prompt"
        placeholder="enter your prompt here"
        onChange={handleChanges}
      />
      <Button text="click" onClick={handleSubmit} />

      <p> Response :{responsee}</p>
    </>
  );
}

export default App;
