var db = require("../models")


module.exports = {

    createUser: function (req, res) {
        console.log(req.body);
        db.User
            .create(req.body)
            .then(function (dbUser) {
                console.log("Posted: " + { dbUser });
                res.json(dbUser);
            });
    },

    findUser: function (req, res) {
        db.User
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbUser) {
                console.log("Found: " + { dbUser });
                res.json(dbUser);
            });
    },

    deleteUser: function (req, res) {
        db.User
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbUser) {
                console.log("Deleted: " + { dbUser });
                res.json(dbUser);
            });
    }


};