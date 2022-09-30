require("dotenv").config();
const express = require("express");
const https = require("https");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5010;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const httpsServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app
);

httpsServer.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
