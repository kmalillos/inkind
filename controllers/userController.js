var db = require("../models")


module.exports = {

    // createUser: function (req, res) {
    //     console.log(req.body);
    //     db.User
    //         .create(req.body)
    //         .then(function (dbUser) {
    //             console.log("Posted: " + { dbUser });
    //             res.json(dbUser);
    //         });
    // },

    createUser: function (req, res) {
        console.log(req.body);
        db.User
            .create({
                username: req.body.username,
                password: req.body.password
            })
            .then(function (dbUser) {
                // res.redirect(307, "/api/login");
                console.log("Created User: " + { dbUser });
                res.json(dbUser);
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
                // res.status(422).json(err.errors[0].message);
            });
    },


    findUser: function (req, res) {
        db.User
            .findOne({
                where: {
                    username: req.params.username
                }
            })
            .then(function (dbUser) {
                console.log("Found: " + { dbUser });
                // bycrypt.compare password
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