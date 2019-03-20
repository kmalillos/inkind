const router = require("express").Router();
const donationController = require("../../controllers/donationController");

router.route("/")
.get(donationController.findAllDonations)
.post(donationController.createDonation);

router.route("/:id")
.get(donationController.createDonation)
.delete(donationController.deleteDonation);

module.exports = router;

// module.exports = function(app) {

//   app.get("/donation", donationController.findAllDonations); 

//   app.get("/donation/:id", donationController.findOneDonation);

//   app.post("/donation", donationController.createDonation); 
  
//   app.delete("/donation/:id", donationController.deleteDonation);

// };


// module.exports = function(app) {

//   app.get("/api/donation", donationController.findAllDonations); 

//   app.get("/api/donation/:id", donationController.findOneDonation);

//   app.post("/api/donation", donationController.createDonation); 
  
//   app.delete("/api/donation/:id", donationController.deleteDonation);

// };
