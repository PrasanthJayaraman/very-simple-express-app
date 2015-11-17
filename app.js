var express = require("express");
var path = require("path");
var route = require("./routes");

var app = express();

var port = Number(process.env.PORT || 3000);

app.listen(port, function(){
  console.log("Im running on port:%d",port);
});

route(app)
