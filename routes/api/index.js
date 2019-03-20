const router = require("express").Router();
const donationRoutes = require("./donation-api");
const searchRoutes = require("./search-api");
const userRoutes = require("./user-api");
const vendorRoutes = require("./vendor-api");

router
.use("/donation", donationRoutes)
.use("/search", searchRoutes)
.use("/user", userRoutes)
.use("/vendor", vendorRoutes);

module.exports = router;
