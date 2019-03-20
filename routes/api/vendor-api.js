const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");

router.route("/")
.get(vendorController.findAllVendors)
.post(vendorController.createVendor);

router.route("/:id")
.get(vendorController.findOneVendor)
.delete(vendorController.deleteVendor);

module.exports = router;

// module.exports = function(app) {

//   app.get("/vendor", vendorController.findAllVendors);

//   app.get("/vendor/:id", vendorController.findOneVendor);

//   app.post("/vendor", vendorController.createVendor);

//   app.delete("/vendor/:id", vendorController.deleteVendor);

// };
