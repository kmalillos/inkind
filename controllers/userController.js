var db = require("../models")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

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

        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
                return res.status(500), json({ error: err });
            }
            else {
                db.User
                    .create({
                        username: req.body.username,
                        password: hash
                    })
                    .then(function(dbUser) {
                        console.log("Created User: " + { dbUser });
                        res.json(dbUser);
                    })
                    .catch(function (err) {
                        console.log(err);
                        res.json(err);
                    });
            }
        })
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