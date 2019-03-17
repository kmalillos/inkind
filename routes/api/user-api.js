const userController = require("../../controllers/userController")

module.exports = function(app) {

    app.post("/api/user/signup", userController.createUser);
    app.post("/api/user/login", userController.loginUser);
    // app.get("/api/user/:id", userController.findUser);
    app.delete("/api/user/:id", userController.deleteUser);

};