
const path = require("path");
var express = require('express');
var app = express();

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
var port = 3000;



app.listen(process.env.PORT || port, () => {
  console.log(`Server started at Port: ${port}`);
});
