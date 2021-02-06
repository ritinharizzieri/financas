const express = require("express");
//executar ele
const app = express();

//medler: meio de campo
app.use(express.static("public"));

//paramentro: porta
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("http://localhost:3000");
});
