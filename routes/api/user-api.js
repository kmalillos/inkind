const userController = require("../../controllers/userController");
const checkAuth = require("../../config/checkAuth");

module.exports = function(app) {

    app.post("/api/user/signup", userController.createUser);

    app.post("/api/user/login", userController.loginUser);
    
    app.delete("/api/user/:id", userController.deleteUser);

    app.get("/api/user/protected", checkAuth, userController.protected);

    app.get("/api/user/getUser", checkAuth, userController.getUser);

};