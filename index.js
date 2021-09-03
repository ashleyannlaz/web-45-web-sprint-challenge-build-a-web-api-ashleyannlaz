const server = require('./api/server.js');
require("dotenv").config();

const PORT = process.env.port || 5000;

server.listen(PORT, () => {
  console.log(`\n* server is listening on ${PORT} *\n`);
});
