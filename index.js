const express = require("express");

const port = 8000;
// const port = process.env.port || 8000

const app = express();

app.listen(port, () => {
  console.log("listening on port ${port}");
});
