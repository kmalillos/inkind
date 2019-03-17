const vendorController = require("../../controllers/vendorController");
// const checkAuth = require("../../config/checkAuth")

module.exports = function(app) {

  // app.get("/api/vendor", checkAuth, vendorController.findAllVendors);

  app.get("/api/vendor", vendorController.findAllVendors);

  app.get("/api/vendor/:id", vendorController.findOneVendor);

  app.post("/api/vendor", vendorController.createVendor);

  app.delete("/api/vendor/:id", vendorController.deleteVendor);

};
