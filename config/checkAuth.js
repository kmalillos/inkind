const jwt = require('jsonwebtoken');
const secretOrPrivateKey = "secretpassword";
// require("dotenv").config();

module.exports = (req, res, next) => {
    try {
        console.log('Authorization successful!');

        const token = req.headers.authorization.split(" ")[1];
        // const token = req.headers.authorization;
        console.log(token);

        const decoded = jwt.verify(token, secretOrPrivateKey);
        req.userData = decoded; 
        next();
    }
    catch (error) {
        console.log('Authorization failed. ' + error);
        return res.status(401).json({
            message: "Authorization Failed"
        })
    }
};