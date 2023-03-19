const express = require("express");
const app = express();
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  basePath: "https://api.openai.com/v1",
});
const openai = new OpenAIApi(configuration);

//this is the route that the client will call
app.post("/api/complete", async (req, res) => {
  try{
  const { prompt } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
  });
  res.send(response.data.choices[0].text);
  }catch(err){
    console.log(req.body);
    console.log(err);
  }

});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
