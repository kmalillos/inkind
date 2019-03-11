const donationController = require("../../controllers/donationController")

module.exports = function(app) {

  app.get("/api/donation", donationController.findAllDonations);
  app.get("/api/donation/:id", donationController.findOneDonation);
  app.post("/api/donation", donationController.createDonation);
  app.delete("/api/donation/:id", donationController.deleteDonation);

};
