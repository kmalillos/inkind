var express = require("express");
var app = express();

var PORT = process.env.PORT || 3001;

// --- Requiring our Models directory for syncing
var db = require("./models");



// LISTENER
// =============================================================================
// ***REMOVE { force: true } AFTER TESTING!
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on http://localhost:" + PORT);
    });
  });