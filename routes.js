var homeController = require("./controller/homeController");

module.exports = function(app){
  app.get("/ironMan", homeController.index);
  app.get("/wolverine", homeController.xmen);
}
