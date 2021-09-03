require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");

const PORT = process.env.port || 5000;
server.use(cors());
server.use(express.json());

server.listen(PORT, () => {
  console.log(`* server is listening on ${PORT} *`);
});
