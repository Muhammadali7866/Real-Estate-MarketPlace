const express = require("express");
const app = express();
require("./utils/database");

app.listen(3000, () => {
  console.log("server is lisiting on the port 3000");
});
