import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/santiago", (req, res) => {
  res.send("new love!");
});
export default app;
