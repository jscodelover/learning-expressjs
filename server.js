const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();
const port = process.env.port || 5000;

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello Dev !!!");
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Server running on ${port} port.....`));
