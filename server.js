
var express = require("express");
var path = require("path");
var app = express();
var routes = require("./routes");
var db = require("./models");
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ROUTES
// =============================================================
// require("./routes/api/vendor-api.js")(app);
// require("./routes/api/donation-api.js")(app);
// require("./routes/api/search-api.js")(app);
// require("./routes/api/user-api.js")(app);
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// })
app.use(routes);


// LISTENER
// =============================================================
// *** turn off 'force: true' after testing
// db.sequelize.sync({ force: true }).then(function() {
  db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
