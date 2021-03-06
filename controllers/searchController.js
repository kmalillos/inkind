var db = require("../models")


module.exports = {

    searchByVendor: function (req, res) {
        db.Vendor
        .findAll({
            where: {
                vendorName: req.params.vendorName
            },
            include: [db.Donation]
        })
        .then(function (dbVendor) {
            console.log("Found: " + { dbVendor });
            res.json(dbVendor);
        })
        .catch(err => console.log(err));
    },

    searchByCity: function (req, res) {
        db.Vendor
        .findAll({
            where: {
                city: req.params.city
            },
            include: [db.Donation]
        })
        .then(function (dbVendor) {
            console.log("Found: " + { dbVendor });
            res.json(dbVendor);
        })
        .catch(err => console.log(err));
    },

    searchByState: function (req, res) {
        db.Vendor
        .findAll({
            where: {
                state: req.params.state
            },
            include: [db.Donation]
        })
        .then(function (dbVendor) {
            console.log("Found: " + { dbVendor });
            res.json(dbVendor);
        })
        .catch(err => console.log(err));
    },

    searchByType: function (req, res) {
        db.Donation
        .findAll({
            where: {
                donationType: req.params.donationType
            },
            include: [db.Vendor]
        })
        .then(function (dbDonation) {
            console.log("Found: " + { dbDonation });
            res.json(dbDonation);
        })
        .catch(err => console.log(err));
    }

};
