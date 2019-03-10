var db = require("../models");

module.exports = function (app) {

  // GET route for getting all of the donations
  app.get("/api/donation", function (req, res) {
    var query = {};
    if (req.query.vendor_id) {
      query.VendorId = req.query.vendor_id;
    }
    db.Donation.findAll({
      where: query
    }).then(function (dbDonation) {
      console.log(`Found all donations`);
      res.json(dbDonation);
    });
  });

  // Get route for retrieving a single donation
  app.get("/api/donation/:id", function (req, res) {
    db.Donation.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDonation) {
      console.log(`Found: ${dbDonation}`);
      res.json(dbDonation);
    });
  });

  // POST route for saving a new donation
  app.post("/api/donation", function (req, res) {
    db.Donation.create(req.body).then(function (dbDonation) {
      console.log(`Posted: ${dbDonation}`);
      res.json(dbDonation);
    });
  });

  // DELETE route for deleting donation
  app.delete("/api/donation/:id", function (req, res) {
    db.Donation.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbDonation) {
      console.log(`Deleted ${dbDonation}`);
      res.json(dbDonation);
    });
  });

  // PUT route for updating donation
  app.put("/api/donation", function (req, res) {
    db.Donation.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbDonation) {
        console.log(`GUpdated: ${dbDonation}`);
        res.json(dbDonation);
      });
  });
};
