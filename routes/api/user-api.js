const router = require("express").Router();
const userController = require("../../controllers/userController");
const checkAuth = require("../../config/checkAuth");

router.route("/signup")
.post(userController.createUser);

router.route("/login")
.post(userController.loginUser);

router.route("/:id")
.delete(userController.deleteUser);

router.route("/protected")
.get(checkAuth, userController.protected);

router.route("/getUser")
.get(checkAuth, userController.getUser);

module.exports = router;

// module.exports = function(app) {

//     app.post("/user/signup", userController.createUser);

//     app.post("/user/login", userController.loginUser);
    
//     app.delete("/user/:id", userController.deleteUser);

//     app.get("/user/protected", checkAuth, userController.protected);

//     app.get("/user/getUser", checkAuth, userController.getUser);

// };


// module.exports = function(app) {

//     app.post("/api/user/signup", userController.createUser);

//     app.post("/api/user/login", userController.loginUser);
    
//     app.delete("/api/user/:id", userController.deleteUser);

//     app.get("/api/user/protected", checkAuth, userController.protected);

//     app.get("/api/user/getUser", checkAuth, userController.getUser);

// };