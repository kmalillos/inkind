
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
app.use(express.static("public"));


// ROUTES
// =============================================================
require("./routes/api/vendor-api.js")(app);
require("./routes/api/donation-api.js")(app);

// LISTENER
// =============================================================
// *** turn off 'force: true' after testing
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
