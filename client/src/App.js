import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [prompt, setPrompt] = useState("");
  const [responsee, setResponsee] = useState("");
  const [messages, setMessages] = useState([]);
  const handleChanges = (e) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("api/complete", {
      prompt: prompt,
    });
    setResponsee(response.data);

    setMessages([ {
      prompt: prompt,
      response: response.data,
    },...messages]);
  };
  useEffect(() => {
    console.log(messages);
  }, [messages]);
  return (
    <>


      <div className="message">
      <input
                className="message-input"
                type="text"
                id="prompt"
                placeholder="enter your prompt here"
                onChange={handleChanges}
              />
              <Button  onClick={handleSubmit}  />
        {messages.map((message) => {
          return (
            <div className="message">
             
              <p className="Q"> Question: {message.prompt}</p>
              <p className="R"> Response: {message.response}</p>

            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
