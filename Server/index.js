const ConnectToMongo = require("./DB/db");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;
ConnectToMongo();

app.get("/", (req, res) => {
  res.send("hello express js");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/note", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Application Listening On http://localhost:${port}`);
});
