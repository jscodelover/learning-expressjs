const express = require("express");
const path = require("path");

const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Hello Dev !!!");
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Server running on ${port} port.....`));
