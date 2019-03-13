var db = require("../models")

module.exports = {


    findAllDonations: function (req, res) {
        // Find all Donation and return them to the user with res.json
        db.Donation
            .findAll({
                include: [db.Vendor]
            })
            .then(function (dbDonation) {
                console.log(`Found all Donations.`);
                res.json(dbDonation);
            });
    },

    findOneDonation: function (req, res) {
        // Find one Donation with the id in req.params.id and return them to the user with res.json
        db.Donation
            .findOne({
                where: {
                    id: req.params.id
                },
                include: [db.Vendor]
            })
            .then(function (dbDonation) {
                console.log("Found: " + { dbDonation });
                res.json(dbDonation);
            });
    },

    createDonation: function (req, res) {
        // Create an Donation with the data available to us in req.body
        console.log(req.body);
        db.Donation
            .create(req.body)
            .then(function (dbDonation) {
                console.log("Posted: " + { dbDonation });
                res.json(dbDonation);
            });
    },

    deleteDonation: function (req, res) {
        // Delete the Donation with the id available to us in req.params.id
        db.Donation
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbDonation) {
                console.log("Deleted: " + { dbDonation });
                res.json(dbDonation);
            });
    }
};
