const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/vendor/:vendorName")
.get(searchController.searchByVendor);

router.route("/city/:city")
.get(searchController.searchByCity);

router.route("/state/:state")
.get(searchController.searchByState);

router.route("/type/:donationType")
.get(searchController.searchByType);

module.exports = router;

// module.exports = function(app) {

//   app.get("/searchVendor/:vendorName", searchController.searchByVendor);

//   app.get("/searchCity/:city", searchController.searchByCity);

//   app.get("searchState/:state", searchController.searchByState);
  
//   app.get("/searchType/:donationType", searchController.searchByType);

// };

// module.exports = function(app) {

//   app.get("/api/searchVendor/:vendorName", searchController.searchByVendor);

//   app.get("/api/searchCity/:city", searchController.searchByCity);

//   app.get("/api/searchState/:state", searchController.searchByState);
  
//   app.get("/api/searchType/:donationType", searchController.searchByType);

// };