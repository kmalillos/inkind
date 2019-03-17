const searchController = require("../../controllers/searchController");

module.exports = function(app) {

  app.get("/api/search/name/:vendorName", searchController.searchByVendor);
//   app.get("/api/search/city/:city", searchController.searchByCity);
//   app.get("/api/search/state/:state", searchController.searchByState);
//   app.get("/api/search/type/:donationType", searchController.searchByType);

};