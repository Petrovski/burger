const express = require("express"),
      app = express(),
      exphbs = require("express-handlebars"),
      routes = require("./controllers/burgers_controller.js"),
      PORT = process.env.PORT || 8080;
      

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});