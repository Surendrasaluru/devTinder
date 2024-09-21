const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("hello node");
});
app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
