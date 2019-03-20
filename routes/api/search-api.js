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

//   app.get("/vendor/:vendorName", searchController.searchByVendor);

//   app.get("/city/:city", searchController.searchByCity);

//   app.get("state/:state", searchController.searchByState);
  
//   app.get("/type/:donationType", searchController.searchByType);

// };
