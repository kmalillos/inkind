const searchController = require("../../controllers/searchController");

module.exports = function(app) {

  app.get("/api/searchVendor/:vendorName", searchController.searchByVendor);
  app.get("/api/searchCity/:city", searchController.searchByCity);
  app.get("/api/searchState/:state", searchController.searchByState);
  app.get("/api/searchType/:donationType", searchController.searchByType);

};