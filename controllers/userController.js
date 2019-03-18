var db = require("../models")
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
// var dotenv = require('dotenv');
// dotenv.config();
var secretOrPrivateKey = "secretpassword";

module.exports = {

    createUser: function (req, res) {

        db.User
            .find({
                where: {
                    username: req.body.username
                }
            })
            .then(function (username) {
                // if (username.length >= 1 ) {
                if (username) {
                    return res.status(422).json({
                        message: "Username exists!"
                    })
                }
                else {
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
                                .then(function (dbUser) {
                                    console.log("Created User: " + { dbUser });
                                    res.json(dbUser);
                                })
                                .catch(function (err) {
                                    console.log(err);
                                    res.json(err);
                                });
                        }
                    })
                }
            })
    },

    loginUser: function (req, res) {
        db.User
            .findOne({
                where: {
                    username: req.body.username
                }
            })
            .then(function (dbUser) {
                if (dbUser < 1) {
                    return res.status(401).json({
                        message: "User don't exist.Authentication failed!"
                    })
                }
                bcrypt.compare(req.body.password, dbUser.password, function (err, result) {
                    if (err) {
                        return res.status(401).json({
                            message: "Wrong Password. Authentication failed!"
                        })
                    };
                    if (result) {
                        const token = jwt.sign(
                            {
                                id: dbUser.id,
                                username: dbUser.username
                            },
                            secretOrPrivateKey,
                            // {
                            //     expiresIn: "1h"
                            // },
                        )
                        return res.status(200).json({
                            message: "Authentication successful",
                            token: token
                        })
                    };
                    return res.status(401).json({
                        message: "Authentication failed!"
                    })
                })
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
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
    },

    // protected: function (req, res) {
    //     res.send("Protected route!")
    // },

    
    getUser: function (req, res) {
        return res.json(req.user);
    }

};