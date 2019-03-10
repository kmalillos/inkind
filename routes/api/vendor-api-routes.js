var db = require("../models");

module.exports = function(app) {
  // Find all Vendor and return them to the user with res.json
  app.get("/api/vendor", function(req, res) {
    db.Vendor.findAll({}).then(function(dbVendor) {
      console.log(`Found all Vendors.`);
      res.json(dbVendor);
    });
  });

  app.get("/api/vendor/:id", function(req, res) {
    // Find one Vendor with the id in req.params.id and return them to the user with res.json
    db.Vendor.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbVendor) {
      console.log(`Found: ${dbVendor}`);
      res.json(dbVendor);
    });
  });

  app.post("/api/vendor", function(req, res) {
    // Create an Vendor with the data available to us in req.body
    console.log(req.body);
    db.Vendor.create(req.body).then(function(dbVendor) {
      console.log(`Posted: ${dbVendor}`);
      res.json(dbVendor);
    });
  });

  app.delete("/api/vendor/:id", function(req, res) {
    // Delete the Vendor with the id available to us in req.params.id
    db.Vendor.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbVendor) {
      console.log(`Deleted: ${dbVendor}`);
      res.json(dbVendor);
    });
  });

};
